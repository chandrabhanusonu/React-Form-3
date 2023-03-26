import React from 'react'
import Templete from '../Components/Templete';
import loginImg from '../assets/login.png'

function Login({setIsLoggedIn}) {
  return (
    <Templete
      title="Welcome Back"
      desc1="Build skills for today , tomorrow and beyond"
      desc2="Eduction to future-proof your carrer"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
     />
  )
}

export default Login;