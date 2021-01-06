import React from 'react'
import { useDispatch } from 'react-redux';
import OAuth2Login from 'react-simple-oauth2-login';
import {authURL, clientID,} from './config'
import { LogIn } from "./actions/auth";

import './LoginButton.css'
 


function LoginButton(){
const dispatch = useDispatch();

const onSuccess = response => logIn(response.access_token);
const onFailure = response => console.error(response);

function logIn(token) {
    dispatch(LogIn(token))
}

    return(<OAuth2Login
        className="login-button"
        authorizationUrl={authURL}
        responseType="token"
        clientId={clientID}
        redirectUri="http://localhost:3000/"
        onSuccess={onSuccess}
        onFailure={onFailure}
    />)
}

export default LoginButton