import { GET_THINGS } from "./types";
import ThingiverseApi from "../ThingiverseApi"

function get_things(days,page) {
    return async function (dispatch){
        const res = await ThingiverseApi.getAll('things',page, days);
        dispatch(got_things(res))
    }

  }

function get_category_things(name, page){
  return async function (dispatch) {
    const res = await ThingiverseApi.getCategoryThings(name, page);
    console.log(res)
    dispatch(got_things(res))
    
  }
  
}

function search_things(term){
    return async function(dispatch){
      const res = await ThingiverseApi.search(term);
      dispatch(got_things(res))
    }
}

function got_things(data){
  return { type: GET_THINGS, payload: data }
}

export {get_things, get_category_things, search_things}