import { GET_MODEL } from "./types";
import ThingiverseApi from "../ThingiverseApi"

function get_model(id) {
    return async function (dispatch){
        const res = await ThingiverseApi.getModel(id);
        dispatch(got_model({id:id, data: res}))
    }

  }

function got_model(data){
  return { type: GET_MODEL, payload: data }
}

export {get_model}