import { Product } from "./product"
import { useEffect, useState } from "react";
import "./men.css";


export const Men = () => {
    const [datas, setDatas] = useState([])

    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(res => setDatas(res))
    },[])
    return (
        <>
        <input type="text" placeholder="Search item"></input>
            <div id="classdiv">
                {datas.length > 0 && datas.map((data) => {
                    return (
                    <div key={data.id} className="nac_prod">
                        <Product
                            id={data._id}
                            imgs={data.image}
                            ttl={data.title}
                            prc={data.price}
                            catg={data.category}
                            rat={data.rating.rate}
                            desc={data.description}
                        />
                    </div>
                    )
                })}
            </div>
        </> 
    )
}