import { SET_CART, SET_USERLOGIN } from "./Actions";

//innite state
const initState = {
  foodChoise: null,
  cart: [],
  userLogin: null,
};

//depatch
const Reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
  }
  switch (action.type) {
    case SET_USERLOGIN:
      return {
        ...state,
        userLogin: action.payload,
      };
  }
};

export { initState };
export default Reducer;
