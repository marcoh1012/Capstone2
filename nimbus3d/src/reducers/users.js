import {GET_LIKED, LIKE_MODEL, LOG_IN, LOG_OUT, UNLIKE_MODEL} from "../actions/types";


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
        };
      
      case LIKE_MODEL:
          return {...state, 'liked': [
            ...state.liked, {...action.payload}
          ]};

      case UNLIKE_MODEL:
          return{...state, 'liked': 
            state.liked.filter(thing => thing.id !== action.payload.id)
          }

      default:
        return state;
    }
  }
  
  export default users;