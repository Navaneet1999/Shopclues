import { useEffect } from "react"
import "./body.css"
import {Navbar} from "../navbar/navbar"

export const Body = () => {
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [])
    const gotoProd = () => {
        return(
            <a href="/product"></a>
        )
    }
    return (
        <div>
            <Navbar/>
            <div id="topdiv">
                <div id="top_left">
                    <img
                        height="450px" width="1000px"
                        src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-01/ShopClues-10th_Anniversary_Sale.jpg" alt=""
                    />
                </div>
                {/* <div id="top_right">
                    <img
                        src="https://cdn.shopclues.com/images/banners/Platinum_MK5_16Dec21_01.jpg" alt=""
                    />
                    <img
                        src="https://cdn.shopclues.com/images/banners/Platinum_MK5_16Dec21_01.jpg" alt=""
                    />
                    <img
                        src="https://cdn.shopclues.com/images/banners/Platinum_MK5_16Dec21_01.jpg" alt=""
                    />
                </div> */}
            </div>
            <div id="products">
                <div id="men_prod" onClick={gotoProd()}>
                    <h2>Men's</h2>
                    <div>
                    
                        <img 
                        width="400px" height="400px"
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt=""/>
                    </div>
                </div>
                <div id="women_prod">
                    <h2>Women's</h2>
                    <div>
                    <img
                    width="400px" height="400px"
                    src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt=""/>
                    </div>
                </div>
                <div id="ele_prod">
                    <h2>Electronics</h2>
                    <div>
                    <img 
                    width="400px" height="400px"
                    src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt=""/>
                    </div>
                </div>
                <div id="jew_prod">
                    <h2>Jewelery</h2>
                    <div>
                    <img 
                    width="400px" height="400px"
                    src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}