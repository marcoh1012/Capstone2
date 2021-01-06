import {LOG_IN, LOG_OUT} from "../actions/types";


const INITIAL_STATE = {};

function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOG_IN:
        return {...state,
            "access_token": action.payload
        };
  
      case LOG_OUT:
        return { ...INITIAL_STATE };


      default:
        return state;
    }
  }
  
  export default auth;