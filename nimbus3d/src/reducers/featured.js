import { GET_FEATURED } from "../actions/types";

const INITIAL_STATE = [];

function featured(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_FEATURED:
          console.log(action.payload)

          if(action.payload.hits.length === 0){
            return []
          }

          return [
            ...action.payload.hits
          ];
  
  
      default:
        return state;
    }
  }
  
  export default featured;