import { combineReducers } from "redux";
import { cartReducer, productsReducer, selectedProductsReducer } from "./reducer";



const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
    cartProduct: cartReducer
})

export default reducers;