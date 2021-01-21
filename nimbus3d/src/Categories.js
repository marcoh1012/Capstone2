import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { get_categories } from "./actions/category";
import { useEffect } from 'react';
import CategoryList from './CategoryList'


function Home(){
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.categories.list !== undefined)
    let categories = useSelector(st => st.categories.list)

    useEffect(function(){
        dispatch(get_categories())
    },[dispatch])
    
    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }
    
    return (
       <div style={{color:'white'}}>
        <h3>Categories</h3>
        <CategoryList categories={categories}/>
        </div>
    )

}

export default Home