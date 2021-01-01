import { combineReducers } from "redux";

import users from './users';
import things from './things';
import categories from './categories'
import featured from './featured'
import models from './models'

export default combineReducers({
    users,
    things,
    categories,
    featured,
    models
  });