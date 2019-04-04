import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import userReducer from './userReducer';
import bookmarkReducer from './bookmarkReducer';
import userArticlesReducer from './userArticlesReducer';
import getSingleArticleReducer from './getSingleArticleReducer';
import commentsReducer from './commentReducer';
import articlesSearchReducer from './articlesSearchReducer';

export default combineReducers({
  auth: authReducer,
  articles: articleReducer,
  user: userReducer,
  bookmarkedArticles: bookmarkReducer,
  allUserArticles: userArticlesReducer,
  singleArticle: getSingleArticleReducer,
  comments: commentsReducer,
  articlesSearchResults: articlesSearchReducer
});
