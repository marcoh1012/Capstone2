import { GET_LIKED, LOG_IN, LOG_OUT } from "./types";
import ThingiverseApi from '../ThingiverseApi'

function LogIn(data) {
  return { type: LOG_IN, payload: data }
}

function LogOut() {
    return {type: LOG_OUT}
    
}

function get_liked(){
  return async function (dispatch){
    const res = await ThingiverseApi.getLikes();
    dispatch(got_liked(res))
}
}

function got_liked(data){
  return { type: GET_LIKED, payload: data}
}


export { LogIn, LogOut, get_liked }