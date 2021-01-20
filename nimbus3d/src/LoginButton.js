import React from 'react'
import { useDispatch } from 'react-redux';
import OAuth2Login from 'react-simple-oauth2-login';
import {authURL, clientID,} from './config'
import { LogIn } from "./actions/auth";

import './LoginButton.css'
import { get_user_info } from './actions/user';
 


function LoginButton(){
const dispatch = useDispatch();

const onSuccess = response => logIn(response.access_token);
const onFailure = response => console.error(response);

 function  logIn(token) {
    dispatch(LogIn(token))
    dispatch(get_user_info())
}

    return(<OAuth2Login
        className="login-button"
        authorizationUrl={authURL}
        responseType="token"
        clientId={clientID}
        redirectUri="http://localhost:3000/home"
        onSuccess={onSuccess}
        onFailure={onFailure}
    />)
}

export default LoginButton