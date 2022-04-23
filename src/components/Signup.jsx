import {Link} from "react-router-dom"

export const SignUp = () => {
    return (
        <>
            <h1>SIGN UP</h1>
            <form id="signform">
            <div id="sigd">Name : <input type="text" placeholder="Enter your name"/></div>
            <div id="sigd">Email: <input type="text" placeholder="Enter your mail id"/></div>
            <div id="sigd">Number: <input type="number" placeholder="Enter your number"/></div>
            <div id="sigd">Password: <input type="text" placeholder="Enter your password"/></div>
                <Link to={`/login`}><button id="sigb">Submit</button></Link>
            </form>
        </>
    )
}