import {GET_MODEL} from '../actions/types'

const INITIAL_STATE = {}

function models(state = INITIAL_STATE, action){
    switch (action.type) {
        case GET_MODEL:
            console.log(action.payload)
  
            return {...state,
            [action.payload.id] : action.payload.data
        }
    
    
        default:
          return state;
      }
}

export default models