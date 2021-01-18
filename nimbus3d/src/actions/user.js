import { GET_LIKED, USER_INFO} from "./types";
import ThingiverseApi from '../ThingiverseApi'

function get_liked(){
  return async function (dispatch){
    const res = await ThingiverseApi.getLikes();
    dispatch(got_liked(res))
}
}

function get_user_info(){
  return async function (dispatch) {
    const res = await ThingiverseApi.getUserData();
    dispatch(got_user_info(res))
  }
}

function got_liked(data){
  return { type: GET_LIKED, payload: data}
}

function got_user_info(data) {
  return { type: USER_INFO, payload: data}
}


export { get_liked, get_user_info }