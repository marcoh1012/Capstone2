import { Card, CardHeader, CardContent, Avatar, Button} from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delete_comment, get_comments } from '../actions/model';


import './Comments.css'
import PostComment from './PostComment';

function Comments({id, username}){
    const dispatch = useDispatch();
    let comments = useSelector(st => st.models.comments)

    useEffect(function(){
        dispatch(get_comments(id))
    }, [id,dispatch])




    if(comments === undefined ||comments.length === 0 ) return (<div><p>No Comments</p> <PostComment id={id}/></div>)
    return (
        <div className="model-comments">
            {comments.slice(0,15).map(comment => { 
                const deleteComment = () => {
                   dispatch(delete_comment(comment.id))
                } 
                if(comment.user === null) return '';

                return(
                <Card className='CommentCard' key={comment.id}>
                    <CardHeader avatar={
                    <Avatar aria-label="recipe" className="comment-avatar">
                        <img src={comment.user.thumbnail} alt="U"/>
                    </Avatar>
                    } title={comment.user.name}
                    subheader={comment.added}/>
                    <CardContent className="comment-content" dangerouslySetInnerHTML={{__html: comment.body_html}}></CardContent>
                    {comment.user.name === username ? 
                    (<Button className="delete-comment" onClick={deleteComment}> Delete</Button>) 
                    : null}
                </Card>
            )})}
            <PostComment id={id}/>
        </div>
    )
}

export default Comments