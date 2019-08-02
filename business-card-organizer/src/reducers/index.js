import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';
import { eventReducer } from './eventReducer';
import { cardReducer } from './cardReducer';
import { collectionReducer } from './collectionReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  eventReducer,
  cardReducer,
  collectionReducer
});

export default rootReducer;
