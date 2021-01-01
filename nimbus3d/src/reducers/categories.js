import { GET_CATEGORIES } from "../actions/types";

const INITIAL_STATE = [];

function categories(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_CATEGORIES:
          console.log(action.payload)
        return [
            ...action.payload
    ];
  
    //   case LOG_OUT:
    //     return { ...INITIAL_STATE };
  
      default:
        return state;
    }
  }
  
  export default categories;