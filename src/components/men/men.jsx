
import { useEffect, useState } from "react";
import "./men.css";


export const Men = () => {
    const [datas, setDatas] = useState([])

    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(res=> 
                // setData(res)
                console.log(res)
            )
            .then(res => setDatas(res))
    },[])
    return (
        <div id="classdiv">
                {datas.map((data) => {
                    return (
                    <div key={data.id}>
                        <h1>{data.title}</h1>
                    </div>
                    )
                })}
        </div>
        
    )
}