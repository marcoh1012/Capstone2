import { GET_LIKED} from "./types";
import ThingiverseApi from '../ThingiverseApi'

function get_liked(){
  return async function (dispatch){
    const res = await ThingiverseApi.getLikes();
    dispatch(got_liked(res))
}
}

function got_liked(data){
  return { type: GET_LIKED, payload: data}
}


export { get_liked }