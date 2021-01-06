import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import React from 'react';

import './ModelCard.css'
import { Button, CardContent, CardHeader } from '@material-ui/core';
import { useState } from 'react';
import FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import {like_model, unlike_model} from './actions/model'
import { Link } from 'react-router-dom';

function ModelCard({thing,liked}){
    // console.log(thing)
    const dispatch = useDispatch()
    // console.log(thing)
 
    let button;
    if(liked){
        button = <FavoriteIcon style={{color:'red'}}/>
    }
    else{
        button = <FavoriteBorderIcon/>
    }

    const [hover, setHover]= useState('none');

    const handleHover = (evt) => {
        setHover('block');
    }

    const handleHoverClose = () => {
        setHover('none');
    }

    const handleFavorite = () => {
        if(liked) dispatch(unlike_model(thing))
        else dispatch(like_model(thing))

    }


    return(
        <Card className='model-card' onMouseEnter={handleHover} onMouseLeave={handleHoverClose} >
            <div className="model-card-icons"><Button className='favorite-button' onClick={handleFavorite}>{button}</Button><p className="num-likes">{thing.like_count}</p></div>
            <Link to={`/model/${thing.id}`}>
            <CardMedia className='model-card-img' component='img' image={thing.preview_image}/>
            <CardContent className="model-card-content model-title" style={{display: hover}}>
                <h3>{thing.name}</h3>
            </CardContent>
            </Link>
            
        </Card>
    )

}

export default ModelCard