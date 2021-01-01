import React from 'react'
import Logout from './Logout'
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { get_categories } from "./actions/category";
import { useEffect } from 'react';
import CategoryList from './CategoryList'


function Home(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.categories[0] !== undefined)
    let categories = useSelector(st => st.categories)

    useEffect(function(){
        dispatch(get_categories())
    },[dispatch])
    
    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }
    
    return (
       <>
        <h3>Categories</h3>
        <CategoryList categories={categories}/>
        <Logout/>
        </>
    )

}

export default Home