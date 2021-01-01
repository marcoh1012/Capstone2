import { GET_CATEGORIES } from "./types";
import ThingiverseApi from "../ThingiverseApi"

function get_categories() {
    return async function (dispatch){
        const res = await ThingiverseApi.getAll('categories');
        dispatch(got_categories(res))
    }

  }

function got_categories(data){
  return { type: GET_CATEGORIES, payload: data }
}

export {get_categories}