import { CircularProgress, Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_model } from './actions/model';

import './ModelPage.css'

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
        // <>
        // <p>{model.id}</p>
        // <p>{model.name}</p>
        // </>
        <Container className="modelPage">
            <h1>{model.name}</h1>
            <div className="model-img"><img src={model.thumbnail} alt='model'></img>
            <div>
                <h3>
                    
                </h3>
            </div></div>
        </Container>
    )
}

export default ModelPage