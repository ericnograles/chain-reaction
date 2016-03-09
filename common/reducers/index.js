import { combineReducers } from 'redux';
import { email, password, user } from './user';

const rootReducer = combineReducers({
  email,
  password,
  user
});

export default rootReducer;