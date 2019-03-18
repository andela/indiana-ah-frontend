import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  articles: articleReducer,
  user: userReducer
});
