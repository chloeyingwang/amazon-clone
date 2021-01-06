import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders.js";

const promise = loadStripe(
  "pk_test_51HQ3skLCoNI57a58TN2DcrX6WsN8csKD3Gf0CeF2WvwN45MhxYNBsZhvGmdpD8HsLp8e0s5sgVm1lQAH7RbU3HG500kOsJEgkc"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in/ the user was logged in
        //when we do this with firebase, even you refresh, it will log you back in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    //as soon as the app loads we attach this listener
  }, []);
  //if we put something like user in the [] like [user] or [user, basket] then when they change it will run, by keeping
  //[] blank, it will only run once when the app component loads... it is like an dynamic if statement in react

  return (
    <Router>
      <div className="app">
        {/* <Header /> 
         both route has Header so we chopped it out and put it outside of Switch and inside of Router */}
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            {/* Make sure your default route is at the bottom!!!!!! or it will never get pick up */}
            {/* when we are in this Route render Header and Home. 
            This will always get hit if it does not match anyting. 
            This is the home page route, my default route */}
            <Header />
            <Home />
          </Route>
        </Switch>
        {/* switch in programing is when you have different cases or statements */}
      </div>
    </Router>
  );
}
// wrap the entire thing into Router
// we want to render it based on the route we are in

export default App;
