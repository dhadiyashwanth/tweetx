import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from "react-router-dom";
import './Login.css'

function Login() {
    return (
       
        <div className='login'>
        <div className="login_comp">
        <div className="sign_up">
        <Logo className='logo'/>
        <Link className='signup_btn' to='/signup' >Create Account</Link>
        </div>
        
        <form className='form'>
        <h2>Login</h2>
        <input type="text" placeholder="Email" /><br />
        <input type="text" placeholder="Password" />
        <div className="submit">
        <p>Forgot Password ?</p>
        <Link className='login_btn' to='/users' >Login</Link>
        </div>
        </form>
        </div>
        <div className="image_bg">
        <img src="https://lh3.googleusercontent.com/proxy/pHPIiaieJKAC6ve2CKS-eY4tpKlHWSmGjKgg7spfnTwPJHL7wOTa2fwPit_7TEqbxVqpOv20LKCQE0rFPtuv5ib0LXkmpkRY6gNBWsiO8Dj2Pl1Ykbp1ENUXR1Qbmw0cmWP0tAxVylcLKF3LvRse2g" alt=""/>
        </div>
        </div>
        

       
    )
}

export default Login
