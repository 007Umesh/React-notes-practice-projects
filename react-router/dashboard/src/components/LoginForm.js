import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';


function LoginForm (props){

    const navigate = useNavigate();
    let setIsLoggedIn =props.setIsLoggedIn;
    const [formData , setFormData] = useState({
        email:'',
        password:'',
    })

    const[password, SetPassword] = useState(false); 

    function changeHandler(evt){
        setFormData((prev)=>(
                    {
            ...prev , [evt.target.name]: evt.target.value
                    }
                
            
        )

        )
    }


    function submitHandler(evt){
        evt.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/Dashboard")
    }

    return(
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input type="emial"
                required
                value = {formData.email}
                onChange={changeHandler}
                placeholder='Enter ur mail id' name='email'
            ></input>
            </label>

            <label>
                <p>
                    Password<sup>*</sup>
                </p>
                <input type={password ? ('text'):('password')}
                required
                value = {formData.password}
                onChange={changeHandler}
                placeholder='Enter ur password' name='password'
            ></input>
            <span onClick={()=> SetPassword((prev)=>!prev)} >
                {password ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
            <Link to='#'>
            <p>
                Forgot Password</p></Link>
            </label>

        <button>
        Sign in    
        </button>    
           
        </form>
    )
}

export default LoginForm;