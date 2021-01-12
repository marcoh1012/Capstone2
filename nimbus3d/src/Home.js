import React from 'react'
import Logout from './Logout'
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { get_things } from "./actions/thing";
import { get_liked } from "./actions/user"
import { useEffect } from 'react';
import ModelList from './ModelList'


function Home(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.things[0] !== undefined && st.users.liked !==undefined )
    let things = useSelector(st => st.things)


    useEffect(function(){
        dispatch(get_things());
        dispatch(get_liked());
    },[dispatch])
    
    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }
    
    return (
       <>
        <h2>Welcome!!</h2>
        <ModelList things={things}/>
        <Logout/>
        </>
    )

}

export default Home