import productApi from "../api/productApi"
import { ActionTypes } from "./actionTypes";

export const fetchProducts = () =>  async (dispatch) => {
    const response = await productApi.get("/products");
    dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data});
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};