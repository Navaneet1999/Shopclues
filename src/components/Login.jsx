import {Link} from "react-router-dom"

export const LogIn = () => {
    return(
        <>
            <h1>LOG IN</h1>
            <form id="logform">
                <div id="sigd">Enter Email: <input type="text" placeholder="Enter your email id"/></div>
                <div id="sigd">Enter Password: <input type="text" placeholder="Enter your password"/></div>
                <Link to={`/`}>
                <button id="logb">Submit</button>
                </Link>
            </form>
        </>
    )
}