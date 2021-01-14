import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { search_things } from './actions/thing';
import ModelList from './ModelList';

function SearchPage(){
    const params = useParams()
    const dispatch = useDispatch()
    const things = useSelector(st => st.things.things)

    useEffect(function () {
        dispatch(search_things(params.term))
    },[params.term, dispatch])


    return (
        <div>
            <ModelList things={things}/>
        </div>
    )

}

export default SearchPage