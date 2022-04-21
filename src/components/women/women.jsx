import { useEffect, useState } from "react"
import "./women.css"

export const Women = () => {
    const [prods, setProds] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?nat=us&results=9&page=1')
            .then((res)=>res.json())
            .then(data=>setProds(data.results))
            .then(data=>console.log(data.results))
    },[])
    
    return (
        <div>
            {prods.map((prod)=>{
                return(
                    <h2>{prod.gender}</h2>
                )
            })}
        </div>
    )
}