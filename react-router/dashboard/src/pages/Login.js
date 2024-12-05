import React from "react";
import Template  from "../components/Template.js";
import loginImage from '../assests/login.jpg';

function Login({setIsLoggedIn}){
    return(
       
            <Template
            title="welcome back"
            desc1="Build skills "
            desc2="education to future-proof your career"
            image={loginImage}
            formtype="login"
            setIsLoggedIn ={setIsLoggedIn}
            
            
            />
        
    )

}

export default Login;