import React from 'react'
import OAuth2Login from 'react-simple-oauth2-login';
import {authURL, clientID,} from './config'
 
const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

function Login(){
    return(<OAuth2Login
        authorizationUrl={authURL}
        responseType="token"
        clientId={clientID}
        redirectUri="http://localhost:3000/"
        onSuccess={onSuccess}
        onFailure={onFailure}
    />)
}

export default Login