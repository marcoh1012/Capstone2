import React from 'react'
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
       <div style={{color:'white'}}>
        <h2>Likes</h2>
        <ModelList things={things}/>
        </div>
    )

}

export default Featured