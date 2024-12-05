import React from "react";
import {} from 'react-icons';
import LoginForm from "../components/LoginForm.js";
import Frames from '../assests/frames.png';
import SignupForm from "../components/SignupForm.js";
function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}){
return (
    <div>
        <div>
        <h1>{title}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>
        {
            formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>): (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
        
        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        <button>
            <p>
                Sign Up With Google
            </p>
        </button>
        </div>
        <div>
            <img src={Frames} alt='image'
            width={558}
            height={504}
            loading="lazy" />

            <img src={image} alt='student'
            width={558}
            height={504}
            loading="lazy" 
            />   
           
           

        </div>
        
    </div>
)
}

export default Template;