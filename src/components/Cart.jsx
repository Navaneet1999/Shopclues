import axios from "axios";
import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { addCartProduct } from "../Redux/action";

export const Cart = () => {
    const [cart,setCart] = useState([])
    const {prodId} = useParams();
    //let product = useSelector((state)=> state.cartProduct.products);
    // const {image, title, price} = product;
    const fetchCart = async(id) => {
        const res = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err)=>{
            console.log("err",err);
        })
        addCartProduct(res.data)
    }
    useEffect(()=>{
        setCart(fetchCart(prodId))
    },[prodId])
    console.log("cart",cart)
    return( 
        <>
            <h1>Cart Page</h1>
        </>
    )
}