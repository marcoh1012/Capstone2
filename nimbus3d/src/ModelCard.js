import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import React from 'react';

import './ModelCard.css'
import { CardContent, CardHeader } from '@material-ui/core';
import { useState } from 'react';

function ModelCard({thing}){
    console.log(thing)
    const [hover, setHover]= useState('none');

    const handleHover = (evt) => {
        setHover('block');
    }

    const handleHoverClose = () => {
        setHover('none');
    }

    return(
        <Card className='model-card' onMouseEnter={handleHover} onMouseLeave={handleHoverClose} >
            <CardMedia className='model-card-img' component='img' image={thing.preview_image}/>
            <CardContent clannName="model-card-content" style={{display: hover}}>
                <h3>{thing.name}</h3>
            </CardContent>
        </Card>
    )
}

export default ModelCard