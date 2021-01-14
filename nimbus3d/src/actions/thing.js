import { GET_THINGS } from "./types";
import ThingiverseApi from "../ThingiverseApi"

function get_things(days,page) {
    return async function (dispatch){
        const res = await ThingiverseApi.getAll('things',page, days);
        dispatch(got_things(res))
    }

  }

function get_category_things(name){
  return async function (dispatch) {
    const res = await ThingiverseApi.getCategoryThings(name);
    dispatch(got_things({hits: res}))
    
  }
  
}

function search_things(term){
    return async function(dispatch){
      const res = await ThingiverseApi.search(term);
      console.log(res)
      dispatch(got_things(res))
    }
}

function got_things(data){
  return { type: GET_THINGS, payload: data }
}

export {get_things, get_category_things, search_things}