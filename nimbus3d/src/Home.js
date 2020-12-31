import React from 'react'
import Logout from './Logout'
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { get_things } from "./actions/thing";
import { useEffect } from 'react';
import ModelList from './ModelList'


function Home(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.things[0] !== undefined)
    let things = useSelector(st => st.things)

    useEffect(function(){
        dispatch(get_things())
    },[dispatch])
    
    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }
    
    return (
       <>
        <h3>Logged In</h3>
        <ModelList things={things}/>
        <Logout/>
        </>
    )

}

export default Home