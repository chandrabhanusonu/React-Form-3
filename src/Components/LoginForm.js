import React, { useState } from 'react'
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"

    const LoginForm = ({setIsLoggedIn}) => {

        const navigate= useNavigate();

        const [formData,setFormData] = useState( {
            email:"", password:""
        })        

        const [showPassword, setShowPassword] = useState(false);

        function changeHandler(event) {

            setFormData( (prevData) => (
                {
                    ...prevData,
                    [event.target.name]:event.target.value
            }
            ) )
        }

        function submitHandler(event){
            event.preventDefault();
            setIsLoggedIn(true);
            toast.success("Loged In");
            navigate("/dashbord");
        }

  return (
    
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>

                <input 
                    required
                    type="email"
                    value = {formData.email}
                    onChange={changeHandler}
                    name="email"
                    placeholder="Enter Your Email ID"/>
            </label>

            
            <label>
                <p>
                    Passowrd<sup>*</sup>
                </p>
                <input 
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"/>

                <span onClick={() => setShowPassword( (prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
                
                <Link to="#">
                    <p>Forget Passowrd</p>
                </Link>
            </label>

            <button>SignIn</button>
            
        </form>
    
  )
}

export default LoginForm;