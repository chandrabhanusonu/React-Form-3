import React from 'react';
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom';
import {toast} from "react-hot-toast";


function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return ( 
        <div className='flex justify-evenly'>
        
            <Link to="/">
                <img src={logo} alt="Logo" widht={160} height={32} loading="lazy" />
            </Link>

            <nva>
                <ul className='flex gap-3'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nva>

            <div className='flex gap-3 ml-3'>
                
                    {   !isLoggedIn &&
                        <Link to="/login">
                        <button>Login</button>
                    </Link>}

                    {   !isLoggedIn &&
                        <Link to="/signup">
                        <button>Sigh Up</button>
                    </Link>}

                    {   isLoggedIn &&
                        <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out")
                        }}>Log Out</button>
                    </Link>}
                    
                    {   isLoggedIn &&
                        <Link to="/deshbord">
                        <button>Deshbord</button>
                    </Link>}
                
            </div>
        </div>
     );
}

export default Navbar;