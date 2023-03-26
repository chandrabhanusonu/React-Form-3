import React from 'react'
import frameImage from "../assets/frame.png"
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'

const Templete = ( {title, desc1, desc2, image, formtype, setIsLoggedIn}) => {

  return (
    <div>

        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formtype === "signup" ? 
            (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) :
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign Up With Google</p>
            </button>
        </div>

        <div>
            <img src={frameImage} alt="Patter" loading='lazy' width={558} height={584} />

            <img src={image} alt="Students" loading='lazy' width={558} height={490} />
        </div>
    </div>
  )
}

export default Templete