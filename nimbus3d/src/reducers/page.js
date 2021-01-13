import { SET_DAYS, SET_PAGE } from "../actions/types";

//used to store the setting that are needed for the api calls such as the days and page number

const INITIAL_STATE ={
    'days': 7,
    'current_page': 1
}


function page(state = INITIAL_STATE, action){
    switch (action.type) {
        case SET_PAGE:
            return {...state,
            "current_page" : action.payload
        }
    
        case SET_DAYS:
            return {...state,
            'days': action.payload}

        default:
          return state;
      }
}

export default page