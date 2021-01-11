import { Card, CardHeader, CardContent, Avatar } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_comments } from '../actions/model';

import './Comments.css'

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
                <Card className='CommentCard'>
                    <CardHeader avatar={
                    <Avatar aria-label="recipe" className="comment-avatar">
                        <img src={comment.user.thumbnail} alt="U"/>
                    </Avatar>
                    } title={comment.user.name}
                    subheader={comment.added}/>
                    <CardContent className="comment-content" dangerouslySetInnerHTML={{__html: comment.body_html}}></CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Comments