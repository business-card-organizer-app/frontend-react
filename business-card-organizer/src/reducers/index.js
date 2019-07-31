import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { eventReducer } from './eventReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  eventReducer
});

export default rootReducer;
