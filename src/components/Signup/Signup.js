import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Signup.css'
// import '../Login/Login.css'

function Signup() {
    return (
        <div className='signUp'> 
        <div className="signUp_comp">
        
        <div className="login1">
        <Logo className='Logo'/>
        <Link className='login__btn' to='/login' > login</Link>
        </div>
        
        <form className='signUp_form'>
        <h2>Create Account</h2>
        <input type="text" placeholder="Name" /><br/>
        <input type="text" placeholder="Email" /><br/>
        <input type="text" placeholder="Password" /><br/>
        <input type="text" placeholder="Confirm Password" />
        <div className="signUp_submit">
        <Link className='signUp_btn' to='/login' >Sign up</Link>
        </div>
        </form>
        </div>
        <div className="image_bg1">
        <img src="https://lh3.googleusercontent.com/proxy/pHPIiaieJKAC6ve2CKS-eY4tpKlHWSmGjKgg7spfnTwPJHL7wOTa2fwPit_7TEqbxVqpOv20LKCQE0rFPtuv5ib0LXkmpkRY6gNBWsiO8Dj2Pl1Ykbp1ENUXR1Qbmw0cmWP0tAxVylcLKF3LvRse2g" alt=""/>
        </div>
        </div>
    )
}

export default Signup
