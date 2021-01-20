import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { post_comment } from '../actions/model';


//Form to post comment to the provided model id.
function PostComment({id}){
    const startingComment = {comment: " "}
    const dispatch = useDispatch();

    const [form, setForm] = useState(startingComment)

    const handleChange = (e) => {
        setForm({
            comment: e.target.value
        })
    }

    const handlePostComment = () => {
        dispatch(post_comment(id, form.comment))
        setForm(startingComment)
    }

    return (
        <div className='Add-Comment'>
            <form className='newComment' autoComplete="off">
            <TextField
                className='post-new-comment'
                id="outlined-multiline-static"
                label='Post Comment'
                multiline
                rows={4}
                defaultValue={form.comment}
                variant="outlined"
                onChange={handleChange} 
               />
                <Button className='post-comment-button' onClick={handlePostComment}> POST </Button>
        </form>
</div>
    )
}

export default PostComment