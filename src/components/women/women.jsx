import { useEffect, useState } from "react"
import "./women.css"

export const Women = () => {
    const [prods, setProds] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .then(json=>setProds(json))
    },[])
    return (
        <div>
            {prods.map((prod) => (
                <h1>{prod.title}</h1>
            ))}
        </div>
    )
}