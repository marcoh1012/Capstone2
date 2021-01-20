
import {DELETE_COMMENT, GET_COMMENTS, GET_FILES, GET_IMAGES, GET_MODEL, POST_COMMENT} from '../actions/types'

const INITIAL_STATE = {}

function models(state = INITIAL_STATE, action){
    switch (action.type) {
        case GET_MODEL:
            return {...state,
            [action.payload.id] : action.payload.data,
            link: action.payload.link
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

        case DELETE_COMMENT:
            //delete Coment
            return {...state, comments:[
                state.comments.filter(comment => comment.id !== action.payload.id)
            ]
            }
        
        case GET_IMAGES:
            //get model images
            return {...state, 'images':[...action.payload]
            }
    
        default:
          return state;
      }
}

export default models