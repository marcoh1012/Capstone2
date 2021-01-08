import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_comments } from '../actions/model';

function Comments({id}){
    const dispatch = useDispatch();
    let comments = useSelector(st => st.models.comments)

    useEffect(function(){
        dispatch(get_comments(id))
    }, [id,dispatch])

    console.log(comments)
    if(comments === undefined ||comments.length === 0 ) return (<p>No Comments</p>)
    return (
        <div className="model-comments">
            {comments.map(comment => (
                <div>{comment.body}</div>
            ))}
        </div>
    )
}

export default Comments