import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="23592"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
            price={29.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
          />
          <Product
            id="39586"
            title="Kenwood kMix Stand Mixer for Baking,
            Stylish Kitchen Mixer with K-beater, Dough Hook and 
            Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81BOGWDXGHL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="354534"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="3594376"
            title="Amazon Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SL1000_.jpg"
          />
          <Product
            id="35098643"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price={1149.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="359706"
            title="Samsung LC49RG90SSUXEN49' Curved LED Gaming Monitor"
            price={1199.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
