import { GET_THINGS } from "./types";
import ThingiverseApi from "../ThingiverseApi"

function get_things() {
    return async function (dispatch){
        const res = await ThingiverseApi.getAll('things');
        dispatch(got_things(res))
    }

  }

function got_things(data){
  return { type: GET_THINGS, payload: data }
}

export {get_things}