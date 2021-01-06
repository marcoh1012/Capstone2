import { GET_FILES, GET_MODEL, LIKE_MODEL, UNLIKE_MODEL } from "./types";
import ThingiverseApi from "../ThingiverseApi"

function get_model(id) {
    return async function (dispatch){
        const res = await ThingiverseApi.getModel(id);
        dispatch(got_model({id:id, data: res}))
    }

  }

function like_model(thing){
  return async function (dispatch) {
    const res = await ThingiverseApi.likeModel(thing.id);
    thing.like_count = thing.like_count + 1;
    dispatch(liked_model(thing))
    
  }
}

function unlike_model(thing){
  return async function(dispatch){
    const res = await ThingiverseApi.unlikeModel(thing.id);
    thing.like_count = thing.like_count - 1;
    dispatch(unliked_model(thing))
  }
}


//get all files from the model
function get_files(id) {
  return async function(dispatch){
    const res = await ThingiverseApi.getFiles(id)
    console.log(res)
    dispatch(got_files(res))
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

export {get_model, like_model, unlike_model, get_files}