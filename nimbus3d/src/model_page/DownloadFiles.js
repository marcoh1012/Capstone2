import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_files } from '../actions/model'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import {Button, Card, CardMedia} from '@material-ui/core'

import './DownloadFiles.css'

function DownloadFiles({id}){
    //get all files using model id and display them to allow users to download them.
    const dispatch = useDispatch()
    const access_token = useSelector(st => st.auth['access_token'])

    let files = useSelector(st => st.models.files)

    useEffect(function() {
        dispatch(get_files(id))
    },[id, dispatch])

    if(files === undefined) return (<p>No Files</p>)

    return (
        <div>{files.map(file => (
            <Card className='download-file-card' key={file.id}><CardMedia className="download-file-image" image={file.thumbnail}/><p>{file.name}</p><Button href={`${file.download_url}?access_token=${access_token}`}><CloudDownloadIcon/></Button></Card>
        ))}</div>
    )

}

export default DownloadFiles