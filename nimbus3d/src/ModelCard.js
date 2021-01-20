import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import React from 'react';

import './ModelCard.css'
import {  CardContent} from '@material-ui/core';
import { useState } from 'react';
import LikeButton from './LikeButton';
import { Link } from 'react-router-dom';

function ModelCard({thing}){

    const [hover, setHover]= useState('none');

    const handleHover = (evt) => {
        setHover('block');
    }

    const handleHoverClose = () => {
        setHover('none');
    }


    return(
        <Card className='model-card' onMouseEnter={handleHover} onMouseLeave={handleHoverClose}  >
            <div className="model-card-icons"><LikeButton thing={thing}/><p className="num-likes"></p></div>
            <Link to={`/model/${thing.id}`}>
            <CardMedia className='model-card-img' component='img' image={thing.preview_image} style={{height:'100%'}}/>
            <CardContent className="model-card-content model-title" style={{display: hover}}>
                <h3>{thing.name}</h3>
            </CardContent>
            </Link>
            
        </Card>
    )

}

export default ModelCard