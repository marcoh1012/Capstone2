import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import {LogOut  } from "./actions/user";

function  Logout() {
    const dispatch = useDispatch()

    function logout() {
        dispatch(LogOut())
    }
    
    return(
        <Button onClick={logout}>
            Log Out
        </Button>
    )
}

export default Logout