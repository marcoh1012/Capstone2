import { combineReducers } from "redux";

import users from './users';
import things from './things';
import categories from './categories'

export default combineReducers({
    users,
    things,
    categories
  });