import { Signin } from "../components/SignIn"
import { Await, Link } from "react-router-dom"
import { LoginPage } from "./LoginPage"

export const HomePage = () => {

    

    return (
        <>
        <section className="container justify-content-center d-flex align-items-center">
            <div className="row position-absolute top-50 start-50 translate-middle">
                <img className="mr-3 rounded-circle w-50" src="https://res.cloudinary.com/dgxmqoyv4/image/upload/w_128,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1705902865/channels4_profile_hetwjt.jpg" alt="Logo Kodigo"/>
                <h1 className="text-center text-justify textWhite mt-0 " >Welcome to Kodigo Music!</h1>
                <button type="button" className="btn btn-primary mb-3"> <Link to ={'LoginPage'} className="linkTextW">Login</Link></button>
                <button type="button" className="btn btn-primary mb-3"> <Link to ={'Signin'} className="linkTextW">New User? Sign In</Link></button>
            </div>
            <br/>
        <div></div>
      </section>
      </>
    )
}