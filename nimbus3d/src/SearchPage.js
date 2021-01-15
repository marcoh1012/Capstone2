import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { search_things } from './actions/thing';
import ModelList from './ModelList';
import Pagination from './Pagination';
import { set_page } from './actions/page';
import { get_liked } from './actions/user';
import { CircularProgress } from '@material-ui/core';

function SearchPage(){
    const params = useParams()
    const dispatch = useDispatch()
    let loaded = useSelector(st => st.things.things !== undefined && st.users.liked !==undefined )
    const things = useSelector(st => st.things.things)
    let total = useSelector(st => st.things.total_things)
    let currentPage = useSelector( st => st.page.current_page)

    useEffect(function () {
        dispatch(set_page(1))
        dispatch(search_things(params.term))
        dispatch(get_liked())
    },[params.term, dispatch])

    const handleSetPage =(num) =>{
        dispatch(set_page(num))
        dispatch(search_things(params.term, num))
    }

    if(!loaded){
        return ( <CircularProgress/>)
    }


    return (
        <div>
            <ModelList things={things}/>
            <Pagination 
            currentPage = {currentPage}
            setPage = {handleSetPage}
            pages = {Math.ceil(total/30)}/>
        </div>
    )

}

export default SearchPage