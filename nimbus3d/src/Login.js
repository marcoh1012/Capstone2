import React from 'react';
import LoginButton from './LoginButton'
import logo from './pics/nimbus.png'

import './Login.css'
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login(){
    const loggedIn = useSelector(st => st.auth['access_token'] !== undefined);

    if (loggedIn) return(
        <Redirect to='/'/>
    )


    return (
        <div className='login-page'>
            <div className='login-box'>
                <div className="login-main">
                    <p>
                        Welcome To Nimbus 3D!
                    </p>
                    <img src={logo} alt='logo' className='login-logo-img'></img>
                    <p>
                        Log In using a MakerBot or Google Account to begin.
                    </p>
                    <LoginButton/>
                </div>
                <p className='login-credits'>Powered By: <a href="https://thingiverse.com" >Thingiverse</a></p>
            </div>

        </div>
    )
}

export default Login