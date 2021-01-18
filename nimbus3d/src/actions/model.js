import { GET_COMMENTS, GET_FILES, GET_MODEL, LIKE_MODEL, POST_COMMENT, UNLIKE_MODEL } from "./types";
import ThingiverseApi from "../ThingiverseApi"

function get_model(id) {
    return async function (dispatch){
        const res = await ThingiverseApi.getModel(id);
        const link = await ThingiverseApi.getDownloadLink(id);
        dispatch(got_model({id:id, data: res, link: link}))
    }

  }

function like_model(thing){
  return async function (dispatch) {
    await ThingiverseApi.likeModel(thing.id);
    thing.like_count = thing.like_count + 1;
    dispatch(liked_model(thing))
    
  }
}

function unlike_model(thing){
  return async function(dispatch){
    await ThingiverseApi.unlikeModel(thing.id);
    thing.like_count = thing.like_count - 1;
    dispatch(unliked_model(thing))
  }
}


//get all files from the model
function get_files(id) {
  return async function(dispatch){
    const res = await ThingiverseApi.getFiles(id)
    dispatch(got_files(res))
  }
  
}

//get all comments from the model
function get_comments(id) {
  return async function(dispatch){
    const res = await ThingiverseApi.getComments(id)
    dispatch(got_comments(res))
  }
}

//post a comment to model
function post_comment(id,comment){
  return async function(dispatch){
    const res = await ThingiverseApi.postComment(id, comment)
    dispatch(posted_comment(res))
  }

}



function got_model(data){
  return { type: GET_MODEL, payload: data }
}

function liked_model(thing) {
  return {type: LIKE_MODEL, payload: thing}
  
}

function unliked_model(thing){
  return {type:UNLIKE_MODEL, payload: thing}
}

function got_files(files){
  return {type: GET_FILES, payload: files}
}

function got_comments(comments){
    return {type: GET_COMMENTS, payload: comments}
}

function posted_comment(comment){
    return {type: POST_COMMENT, payload: comment}
}

export {get_model, like_model, unlike_model, get_files, get_comments, post_comment}