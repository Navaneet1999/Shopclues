export const Product = ({id,imgs,ttl,catg,prc,rat,desc}) => {
    return(
        <div>
            <a href={`/products/${id}`}>
                <img width="200px" height="250px" src={imgs} alt=""/>
                <h3>{ttl}</h3>
                <h2>{catg}</h2>
                <h3>{prc}$</h3>
                <h4>{rat}</h4>
                <p>{desc}</p>
            </a>
            
        </div>
    )
}