import {GET_LIKED, GET_USER, LIKE_MODEL, LOG_IN, LOG_OUT, UNLIKE_MODEL, USER_INFO} from "../actions/types";


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

      case USER_INFO:
        return{...state, 
          info: {...action.payload}
        }

      case GET_USER:
        return{...state,
          user: {...action.payload.user},
          user_things: [...action.payload.things]
        }

      default:
        return state;
    }
  }
  
  export default users;