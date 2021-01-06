import { Button, CircularProgress, Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_model } from './actions/model';
import FavoriteBorderIcon  from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {like_model, unlike_model} from './actions/model'
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import LinkIcon from '@material-ui/icons/Link';
import Carousel from './Carousel'

import './ModelPage.css'
import { get_liked } from './actions/user';

function ModelPage(){
    const params = useParams();
    const dispatch = useDispatch();

    let loaded = useSelector(st => st.models[params.id] !== undefined)
    let model = useSelector(st => st.models[params.id])
    useEffect(function(){
        dispatch(get_liked())
        dispatch(get_model(params.id))

    },[params.id, dispatch])
    
    const handleFavorite = () => {
        // if(liked) dispatch(unlike_model(model))
        // else dispatch(like_model(model))

    }
    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }
    console.log(model)
    return (
        <Container className="modelPage">
            <h1>{model.name}</h1>
            <p>By: {model.creator.name}</p>
            <div className="model-img">
                {/* img src={model.thumbnail} alt='model'></img> */}
                <Carousel img={model.thumbnail}/>
            </div>
            <div className='action_buttons'>
                <div><Button className='favorite-button' onClick={handleFavorite}><FavoriteIcon/></Button>{model.like_count}</div>
                <div><Button className='download-all'><GetAppIcon/></Button></div>
                <div><Button className='view-all-files'><FileCopyIcon/></Button></div>
                <div><Button className='comment-icon'><ChatBubbleIcon/></Button></div>
                <div><Button className='copy-link-icon'><LinkIcon/></Button></div>
                <div><Button className='copy-link-icon'>VIEW MORE</Button></div>
            </div>
            <div className='summary'>
                {/* <h3>
                    Summary:
                </h3>
                <div dangerouslySetInnerHTML={{__html: model.description_html}}></div>
                <h3>
                    Print Settings:
                </h3> */}
                <div dangerouslySetInnerHTML={{__html: model.details}}></div>

            <div className='files'>
                <h1>Files</h1>
                {/* All downloadable files will go here */}
            </div>
            <div className="comments">
                <h1>Comments</h1>
            </div>
            </div>
           

        </Container>
    )
}

export default ModelPage