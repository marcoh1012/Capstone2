import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ModelList from './ModelList'
import {get_category_things} from './actions/thing'
import { get_liked } from './actions/user';
import { CircularProgress } from '@material-ui/core';
import Pagination from './Pagination';
import { set_page } from './actions/page';


function CategoryModelList(){
    const params = useParams();
    const dispatch = useDispatch();

    let loaded = useSelector(st => st.things.things !== undefined && st.users.liked !==undefined )
    const things = useSelector(st => st.things.things)
    let total = useSelector(st => st.things.total_things)
    let currentPage = useSelector( st => st.page.current_page)


    useEffect(function(){
        dispatch(set_page(1))
        dispatch(get_category_things(params.id));
        dispatch(get_liked())
    }, [params.id, dispatch])

    const handleSetPage =(num) =>{
        dispatch(set_page(num))
        dispatch(get_category_things(params.id, num))
    }


    if(!loaded){
        return ( <CircularProgress/>)
    }

    return(
        <>
        <h2>{params.id}</h2>
        <ModelList things={things}/>
        <Pagination 
            currentPage = {currentPage}
            setPage = {handleSetPage}
            pages = {Math.ceil(total/30)}/>
        </>
    )

}

export default CategoryModelList