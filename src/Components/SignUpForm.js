import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState( {
        firstName:"" , lastName:"" , email:"" , password:"", confirmPassword:""
    })

    const [showPassword,setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event) {

        setFormData( (preData) => (
            {
                ...preData,
                [event.target.name]:event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do Not Mathch")
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("printing account data ");
        console.log(accountData);
        navigate("/dashbord");
    }

  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instuctor</button>
        </div>

        <form onSubmit={submitHandler}>
            <div>
                <label>
                    <p>First Name</p><sup>*</sup>
                    <input
                        required
                        type="text"
                        name='firstName'
                        onChange={changeHandler}
                        value={formData.firstName}
                        placeholder="Enter First Name" />
                </label>
                <label>
                    <p>Last Name</p><sup>*</sup>
                    <input
                        required
                        type="text"
                        name='lastName'
                        onChange={changeHandler}
                        value={formData.lastName}
                        placeholder="Enter Last Name" />
                </label>
            </div>

            <label>
                    <p>Email Address</p><sup>*</sup>
                    <input
                        required
                        type="email"
                        name='email'
                        onChange={changeHandler}
                        value={formData.email}
                        placeholder="Enter Email Address" />
            </label>

            <div>
                <label>
                        <p>Create Passowrd</p><sup>*</sup>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            value={formData.password}
                            placeholder="Enter Password" />

                        <span onClick={() =>setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                        </span>
                </label>

                <label>
                        <p>Confirm Passowrd</p><sup>*</sup>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            placeholder="Enter Password" />
                        <span onClick={() =>setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
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

export default SignUpForm;