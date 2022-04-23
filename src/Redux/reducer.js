import { ActionTypes } from "./actionTypes";

const intialState = {
  products: [],
  cart: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const cartReducer = (state = intialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.ADD_CART_PRODUCT:
      return {...state, cart: payload};
    default:
      return state;
  }
}