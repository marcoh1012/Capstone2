import { act } from 'react-dom/test-utils'
import {GET_COMMENTS, GET_FILES, GET_MODEL, POST_COMMENT} from '../actions/types'

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

        case GET_COMMENTS:
            //add comments to state
            return {...state,
            'comments': action.payload}

        case POST_COMMENT:
            //add Comment
            return {...state, 'comments': [
                ...state.comments, action.payload
            ]}
    
        default:
          return state;
      }
}

export default models