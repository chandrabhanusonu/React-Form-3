import React from 'react'
import SignUpImg from '../assets/signup.png'
import Templete from '../Components/Templete';

function Signup({setIsLoggedIn}) {
  return (
    <Templete
      title="Welcome Back"
      desc1="Build skills for today , tomorrow and beyond"
      desc2="Eduction to future-proof your carrer"
      image={SignUpImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
     />
  )
}

export default Signup;