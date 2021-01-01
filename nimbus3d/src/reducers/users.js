import {GET_LIKED, LOG_IN, LOG_OUT} from "../actions/types";

const INITIAL_STATE = {};

function users(state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOG_IN:
        return {...state,
            "access_token": action.payload
        };
  
      case LOG_OUT:
        return { ...INITIAL_STATE };

        case GET_LIKED:
          return{...state,
          'liked': action.payload
        }
  
      default:
        return state;
    }
  }
  
  export default users;