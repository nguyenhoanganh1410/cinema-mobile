//actions

export const SET_CART = "set_Cart";
export const SET_USERLOGIN = "set_UserLogin";

export const SetCart = (payload) => {
  return {
    type: SET_CART,
    payload,
  };
};

export const SetUserLogin = (payload) => {
  return {
    type: SET_USERLOGIN,
    payload,
  };
};
