import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import {setProducts} from "../Redux/action";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch()
  const fetchProduct = async() => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
      console.log("err",err)
    })
    dispatch(setProducts(response.data))
  }
  useEffect (() => {
    fetchProduct()
  },[]);
  console.log("products",products)
  const getProd = () => {
    
  }
  return (
    <>
    <h1>Products</h1>
    <input type="text" placeholder="Search by catogory" onChange={getProd()}/>
    <div className="ui grid container">
      
      
      <ProductComponent/>
    </div>
    </>
  );
};

export default ProductPage;