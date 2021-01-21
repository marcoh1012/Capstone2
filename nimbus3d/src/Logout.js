import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import {LogOut  } from "./actions/auth";

function  Logout() {
    const dispatch = useDispatch()

    function logout() {
        dispatch(LogOut())
    }
    
    return(
        <Button variant="contained" color="primary"  style={{marginLeft: "1rem"}}onClick={logout}>
            Log Out
        </Button>
    )
}

export default Logout