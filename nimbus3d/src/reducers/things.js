import { GET_THINGS } from "../actions/types";

const INITIAL_STATE = {};

function things(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_THINGS:
        return {...state, total_things: action.payload.total,
            things: [...action.payload.hits]
    };

      default:
        return state;
    }
  }
  
  export default things;