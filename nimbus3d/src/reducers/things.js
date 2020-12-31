import { GET_THINGS } from "../actions/types";

const INITIAL_STATE = [];

function things(state = INITIAL_STATE, action) {
    switch (action.type) {
      case GET_THINGS:
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
  
  export default things;