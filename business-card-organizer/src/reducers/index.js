import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { eventReducer } from './eventReducer';
import { cardReducer } from './cardReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  eventReducer,
  cardReducer
});

export default rootReducer;
