import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ModelList from './ModelList'
import {get_category_things} from './actions/thing'
import { get_liked } from './actions/user';
import { CircularProgress } from '@material-ui/core';


function CategoryModelList(){
    const params = useParams();
    const dispatch = useDispatch();

    let loaded = useSelector(st => st.things.things !== undefined && st.users.liked !==undefined )
    const things = useSelector(st => st.things.things)

    useEffect(function(){
        dispatch(get_category_things(params.id));
        dispatch(get_liked())
    }, [params.id, dispatch])


    if(!loaded){
        return ( <CircularProgress/>)
    }

    return(
        <>
        <h2>params.id</h2>
        <ModelList things={things}/>
        </>
    )

}

export default CategoryModelList