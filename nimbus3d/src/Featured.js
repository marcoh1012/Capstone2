import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { get_featured } from "./actions/featured";
import { useEffect } from 'react';
import { get_liked } from './actions/user'
import ModelList from './ModelList'


function Featured(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.featured[0] !== undefined && st.users.liked !==undefined )
    let things = useSelector(st => st.featured)

    useEffect(function(){
        dispatch(get_featured())
        dispatch(get_liked());
    },[dispatch])
    
    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }

    if(things.length === 0){
        return(
            <p>No Featured Items Found!</p>
        )
    }
    
    return (
       <div style={{color:'white'}}>
        <h2>Featured</h2>
        <ModelList things={things}/>
        </div>
    )

}

export default Featured