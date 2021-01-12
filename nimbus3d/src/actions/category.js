import { GET_CATEGORIES, GET_CATEGORY } from "./types";
import ThingiverseApi from "../ThingiverseApi"

function get_categories() {
    return async function (dispatch){
        const res = await ThingiverseApi.getCategories();
        dispatch(got_categories(res))
    }

  }

function get_category(name){
  return async function (dispatch) {
    const res = await ThingiverseApi.getCategory(name);
    dispatch(got_category(res))
  } 
}

function got_categories(data){
  return { type: GET_CATEGORIES, payload: data }
}

function got_category(data){
  return { type: GET_CATEGORY, payload: data}
}
export {get_categories, get_category}