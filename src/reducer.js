export const initialState = {
  basket: [],
  user: null,
  // when the app loads by deafult the user is going to be null
};

//Selector (higly used in production environment)
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
//reduce is a powerful function, the use of it is to iterate? through the basket and tally up the total

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //it will only find the first one and return it to you
      let newBasket = [...state.basket];
      //we are going to copy the basket into a new temporary variables, copy what the ...state.basket currently have
      if (index >= 0) {
        newBasket.splice(index, 1);
        //chop it by 1, shop the item which has the index
      } else {
        console.warn(
          "Cant remove product (id: ${action.id}) as its not in basket!"
        );
      }

      // return {
      //   ...state,
      //   basket: state.basket.filter(item => item.id !==action.id)
      // }   //this will remove all the item with the same id which is not what we want

      return {
        ...state,
        //everything in the state
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

// state: the state of the application
// action: what you are trying to do like you are trying to add to the basket , remove from the basket
// reducer is always listening
