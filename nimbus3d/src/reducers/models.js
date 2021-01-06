import {GET_FILES, GET_MODEL} from '../actions/types'

const INITIAL_STATE = {}

function models(state = INITIAL_STATE, action){
    switch (action.type) {
        case GET_MODEL:
            return {...state,
            [action.payload.id] : action.payload.data
        }
    
        case GET_FILES:
            //add files to state
            return {...state,
            'files': action.payload}
    
        default:
          return state;
      }
}

export default models