import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios"
import { setProducts } from "../Redux/action";

const ProductPage = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch()
  const fetchProduct = async() => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
      console.log("err",err)
    })
    dispatch(setProducts(response.data));
    
  }
  useEffect (() => {
    fetchProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  console.log("products",products)
  return (
    <>
    <h1>Products</h1>
    <div>
      <select>
        <option value="null">Sort by price</option>
        <option value="Low to High">Low to High</option>
        <option value="High to Low">High to Low</option>
      </select>
    </div>
    <div className="ui grid container">
      <ProductComponent/>
    </div>
    </>
  );
};

export default ProductPage;
