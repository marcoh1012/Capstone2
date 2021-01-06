import { combineReducers } from "redux";

import users from './users';
import things from './things';
import categories from './categories'
import featured from './featured'
import models from './models'
import auth from './auth'

export default combineReducers({
    auth,
    users,
    things,
    categories,
    featured,
    models
  });