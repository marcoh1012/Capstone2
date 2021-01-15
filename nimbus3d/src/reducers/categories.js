import { GET_CATEGORIES, GET_CATEGORY } from "../actions/types";

const INITIAL_STATE = {};

function categories(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_CATEGORIES:
        return {...state, list: [...action.payload]}

      case GET_CATEGORY:
        return {...state,
        [action.payload.name]: {...action.payload}}
  
      default:
        return state;
    }
  }
  
  export default categories;