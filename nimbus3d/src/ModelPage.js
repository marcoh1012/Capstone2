import { Button, CircularProgress, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_files, get_model } from './actions/model';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import LinkIcon from '@material-ui/icons/Link';
import Images from './model_page/Images'
import DownloadFiles from "./model_page/DownloadFiles";
import DownloadingModal from "./model_page/DownloadingModal"

import './ModelPage.css'
import { get_liked, get_user_info } from './actions/user';
import Comments from './model_page/Comments';
import { CopyToClipboard } from "react-copy-to-clipboard";
import LikeButton from './LikeButton';

import JSZip from 'jszip'
import { saveAs } from 'file-saver';
import ThingiverseApi from './ThingiverseApi';

function ModelPage(){
    const params = useParams();
    const dispatch = useDispatch();
    const id = params.id
    let zip = new JSZip();

    const [downloading, setDownloading] = useState(false);



    let loaded = useSelector(st => st.models[params.id] !== undefined)
    let model = useSelector(st => st.models[params.id])
    let files = useSelector(st => st.models.files)

    let user_info = useSelector(st => st.users.info)
    // let settings = model.details_parts[1].data[0];
    // console.log(settings)

    if(user_info === undefined){
        dispatch(get_user_info())
    }
   
    useEffect(function(){
        dispatch(get_liked())
        dispatch(get_model(params.id))
        dispatch(get_files(params.id))

    },[params.id, dispatch])
    

    //function to download all files into one zip folder
    async function zipFolder(){
        setDownloading(true)

        for (let file of files)
        {
            let stl = await ThingiverseApi.downloadFile(file.id)
            zip.file(file.name, stl )
        }

        
        zip.generateAsync({type:"blob"}).then(function(content) {
            saveAs(content, `${model.name}.zip`);
        });
        
        setDownloading(false)
    }

    const settings = () => {
        let keys = Object.keys(model.details_parts[1].data[0])
        return (
            keys.map( setting => (
                <div style={{display: 'block', marginBottom: '1rem'}}>
                <h4><strong style={{textTransform:'uppercase'}}>{setting}:</strong></h4>
                <p>{model.details_parts[1].data[0][setting]}</p>
                </div>
            ))
        )
    }
    
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
                <Images id={id}/>
            </div>
            <div className='action_buttons'>
                <div className='likes-button'><LikeButton thing={model}/></div>
                <div><Button onClick={zipFolder} className='download-all' title="Download All"><GetAppIcon/></Button></div>
                <div><Button className='view-all-files' title="Files" href="#files"><FileCopyIcon/></Button></div>
                <div><Button className='comment-icon' title='Comments' href="#comments"><ChatBubbleIcon/></Button></div>
                <div><CopyToClipboard text={`localhost:3000/model/${model.id}`}>
                     <Button className='copy-link-icon' title="Copy-Link"><LinkIcon/></Button>
                     </CopyToClipboard></div>
                <div><Button className='view-more-icon' title="View More" href={`/users/${model.creator.name}`}>VIEW MORE</Button></div>
            </div>
            <div className='summary'>
                <h2>Summary:</h2>
                <div dangerouslySetInnerHTML={{__html: model.details_parts[0].data[0].content}}></div>
                { model.details_parts[1].data !== undefined? (
                    <h2>Settings:</h2>): ""}
                { model.details_parts[1].data !== undefined? (
                    settings()): ""}
                

            <div className='files' id='files'>
                <h1>Files </h1>
                <Button onClick={zipFolder} variant='outlined'>Download All</Button>
                {/* All downloadable files will go here */}
                <DownloadFiles id={id}/>
                
            </div>
            <div className="comments" id='comments'>
                <h1>Comments</h1>
                <Comments id={id} username={user_info.name}/>
            </div>
            </div>
           
           <DownloadingModal open={downloading} setOpen={setDownloading}/>

        </Container>
    )
}

export default ModelPage