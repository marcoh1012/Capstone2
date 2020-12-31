import { combineReducers } from "redux";

import users from './users';
import things from './things';

export default combineReducers({
    users,
    things
  });