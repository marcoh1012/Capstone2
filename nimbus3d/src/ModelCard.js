import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import React from 'react';

import './ModelCard.css'
import { Button, CardContent, CardHeader } from '@material-ui/core';
import { useState } from 'react';
import FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder';

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
            <div className="model-card-icons"><Button className='favorite-button'><FavoriteBorderIcon/></Button><p className="num-likes">{thing.like_count}</p></div>
            <CardMedia className='model-card-img' component='img' image={thing.preview_image}/>
            <CardContent className="model-card-content model-title" style={{display: hover}}>
                <h3>{thing.name}</h3>
            </CardContent>
            
        </Card>
    )

}

export default ModelCard