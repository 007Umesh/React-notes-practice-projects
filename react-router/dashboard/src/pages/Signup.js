import React from "react";
import Template  from "../components/Template.js";
import SignImg from '../assests/signup.webp';

function Signup({setIsLoggedIn}){
    return(
       
            <Template
            title="create a account"
            desc1="Build skills "
            desc2="education to future-proof your career"
            image={SignImg}
            formtype="signup"
            setIsLoggedIn ={setIsLoggedIn}
            
            
            />
        
    )

}

export default Signup;