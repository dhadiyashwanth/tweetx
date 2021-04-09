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
        <img src="https://lh3.googleusercontent.com/proxy/BbE9rr-SWVd5bd9w5mNer57FfFCVj51_UdSNjPC-oKKOUT8T8cbAexSJkzVOlYPR24AUi-9QZi8J0-8R75rgEUH1_dbYId3kPQ5CIGhCe-88tGHsLODu9FWN-ExQp-ZVKOURJTartdVV0r6LJMfixg" alt=""/>
        </div>
        </div>
        

       
    )
}

export default Login
