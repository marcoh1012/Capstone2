import React from 'react'
import Logout from './Logout'
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { get_featured } from "./actions/featured";
import { useEffect } from 'react';
import ModelList from './ModelList'


function Featured(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.featured[0] !== undefined)
    let things = useSelector(st => st.featured)

    useEffect(function(){
        dispatch(get_featured())
    },[dispatch])
    
    
    if(!loaded){
        return(
            <CircularProgress/>
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