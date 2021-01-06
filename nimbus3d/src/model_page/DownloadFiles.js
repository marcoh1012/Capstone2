import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_files } from '../actions/model'

function DownloadFiles({id}){
    //get all files using model id and display them to allow users to download them.
    const dispatch = useDispatch()

    let files = useSelector(st => st.models.files)
    console.log(id)

    useEffect(function() {
        dispatch(get_files(id))
    },[id, dispatch])

    if(files === undefined) return (<p>No Files</p>)

    return (
        <div>{files.map(file => (
            <p>{file.name}</p>
        ))}</div>
    )

}

export default DownloadFiles