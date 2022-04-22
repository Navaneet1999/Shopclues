import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios"
import { setProducts } from "../Redux/action";

const ProductPage = () => {
  const [Data, setData] = useState()
  const products = useSelector((state) => state);
  const dispatch = useDispatch()
  const fetchProduct = async() => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
      console.log("err",err)
    })
    dispatch(setProducts(response.data));
    setData()
  }
  useEffect (() => {
    fetchProduct();
    setData()
  },[]);
  const sort = (e) => {
    console.log("Data", Data)
  }
  console.log("products",products)
  return (
    <>
    <h1>Products</h1>
    <div>
      <select onChange={(e)=>{sort(e)}}>
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
