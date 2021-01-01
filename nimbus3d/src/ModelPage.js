import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_model } from './actions/model';

function ModelPage(){
    const params = useParams();
    const dispatch = useDispatch();

    let loaded = useSelector(st => st.models[params.id] !== undefined)
    let model = useSelector(st => st.models[params.id])

    useEffect(function(){
        dispatch(get_model(params.id))
    },[params.id, dispatch])
    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }
    console.log(model)
    return (
        <>
        <p>{model.id}</p>
        <p>{model.name}</p>
        </>
    )
}

export default ModelPage