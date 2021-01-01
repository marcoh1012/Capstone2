import { GET_FEATURED } from "./types";
import ThingiverseApi from "../ThingiverseApi"

function get_featured() {
    return async function (dispatch){
        const res = await ThingiverseApi.getFeatured();
        dispatch(got_featured(res))
    }

  }

function got_featured(data){
  return { type: GET_FEATURED, payload: data }
}

export {get_featured}