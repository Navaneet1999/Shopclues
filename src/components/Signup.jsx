import {Link} from "react-router-dom"

export const SignUp = () => {
    return (
        <>
            <form>
                <input type="text" placeholder="Enter your name"/>
                <input type="text" placeholder="Enter your mail id"/>
                <input type="number" placeholder="Enter your number"/>
                <input type="text" placeholder="Enter your password"/>
                <Link to={`/login`}><button>Submit</button></Link>
            </form>
        </>
    )
}