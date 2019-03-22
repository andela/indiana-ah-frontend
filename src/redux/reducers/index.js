import { combineReducers } from 'redux';
import { SIGN_OUT_USER } from '../actions/actionTypes';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import userReducer from './userReducer';
import bookmarkReducer from './bookmarkReducer';

const appReducer = combineReducers({
  auth: authReducer,
  articles: articleReducer,
  user: userReducer,
  bookmarkedArticles: bookmarkReducer
});

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT_USER) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
