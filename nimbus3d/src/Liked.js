import React from 'react'
import Logout from './Logout'
import { useSelector, useDispatch } from 'react-redux';
import { get_liked } from "./actions/user";
import { useEffect } from 'react';
import ModelList from './ModelList'


function Featured(){
    const dispatch = useDispatch()
    let things = useSelector(st => st.users.liked)

    useEffect(function(){
        dispatch(get_liked())
    },[dispatch])
    
    
    if(things === undefined){
        return(
            <p>No Models Liked Yet!!</p>
        )
    }
    
    return (
       <>
        <h2>Featured</h2>
        <ModelList things={things}/>
        <Logout/>
        </>
    )

}

export default Featured