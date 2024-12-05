import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';




function SignupForm(props){
    const navigate = useNavigate();
    let setIsLoggedIn =props.setIsLoggedIn;
    const [formData , setFormData] = useState({
        Email:'',
        Password:'',
        FirstName:'',
        LastName:'',
        ConfirmPassword:'',
    })

    const[password, SetPassword] = useState(false); 
   

    function changeHandler(evt){
        setFormData((prev)=>(
                    {
            ...prev , [evt.target.name]: evt.target.value
                    }             
             ))
            }
            function submitHandler(evt){
                evt.preventDefault();
                setIsLoggedIn(true);
                toast.success("Account Created");
                navigate("/login")
            }

    return(
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
            <label>
                <p>First name<sup>*</sup></p>
                <input type="text" name="FirstName"
                required onChange={changeHandler} placeholder="Enter your first name"
                value={formData.FirstName}
                />
            </label>

            <label>
                <p>Last name<sup>*</sup></p>
                <input type="text" name="LastName"
                required onChange={changeHandler} placeholder="Enter your Last name"
                value={formData.LastName}
                />
            </label>

            <label>
                <p>Email Address<sup>*</sup></p>
                <input type="email" name="Email"
                required onChange={changeHandler} placeholder="Enter your Email"
                value={formData.Email}
                />
            </label>

            <div>
            <label>
                <p>
                 Create  Password<sup>*</sup>
                </p>
                <input type={password ? ('text'):('password')}
                required
                value = {formData.Password}
                onChange={changeHandler}
                placeholder='Enter ur password' name='Password'
            ></input>
            <span onClick={()=> SetPassword((prev)=>!prev)} >
                {password ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
            </label>
            
            <label>
                <p>
                 Confirm  Password<sup>*</sup>
                </p>
                <input type={password ? ('text'):('password')}
                required
                value = {formData.ConfirmPassword}
                onChange={changeHandler}
                placeholder='Enter ur password' name='ConfirmPassword'
            ></input>
            <span onClick={()=> SetPassword((prev)=>!prev)} >
                {password ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
            </label>
            </div>

            
        <button>
        Create Account  
        </button> 

            </form>
        </div>
    )
}

export default SignupForm;