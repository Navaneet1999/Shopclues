import {Link} from "react-router-dom"

export const LogIn = () => {
    return(
        <>
            <form>
                <input type="text" placeholder="Enter your email id"/>
                <input type="text" placeholder="Enter your password"/>
                <Link to={`/`}>
                <button>Submit</button>
                </Link>
            </form>
        </>
    )
}