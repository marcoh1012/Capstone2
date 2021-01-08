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
import DownloadFiles from "./model_page/DownloadFiles";

import './ModelPage.css'
import { get_liked } from './actions/user';
import Comments from './model_page/Comments';
import { CopyToClipboard } from "react-copy-to-clipboard";
import LikeButton from './LikeButton';

function ModelPage(){
    const params = useParams();
    const dispatch = useDispatch();
    const id = params.id

    let loaded = useSelector(st => st.models[params.id] !== undefined)
    let model = useSelector(st => st.models[params.id])
    
   
    useEffect(function(){
        dispatch(get_liked())
        dispatch(get_model(params.id))

    },[params.id, dispatch])
    
    
    if(!loaded){
        return(
            <CircularProgress/>
        )
    }
    return (
        <Container className="modelPage">
            <h1>{model.name}</h1>
            <p>By: {model.creator.name}</p>
            <div className="model-img">
                {/* img src={model.thumbnail} alt='model'></img> */}
                <Carousel img={model.thumbnail}/>
            </div>
            <div className='action_buttons'>
                <div className='likes-button'><LikeButton thing={model}/></div>
                <div><Button className='download-all' title="Download All"><GetAppIcon/></Button></div>
                <div><Button className='view-all-files' title="Files" href="#files"><FileCopyIcon/></Button></div>
                <div><Button className='comment-icon' title='Comments' href="#comments"><ChatBubbleIcon/></Button></div>
                <div><CopyToClipboard text={`localhost:3000/model/${model.id}`}>
                     <Button className='copy-link-icon' title="Copy-Link"><LinkIcon/></Button>
                     </CopyToClipboard></div>
                <div><Button className='view-more-icon' title="View More">VIEW MORE</Button></div>
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

            <div className='files' id='files'>
                <h1>Files </h1>
                <Button variant='outline-primary'>Download All</Button>
                {/* All downloadable files will go here */}
                <DownloadFiles id={id}/>
                
            </div>
            <div className="comments" id='comments'>
                <h1>Comments</h1>
                <Comments id={id}/>
            </div>
            </div>
           

        </Container>
    )
}

export default ModelPage