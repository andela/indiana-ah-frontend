import {
  GET_ALL_ARTICLES, GET_ALL_ARTICLES_ERROR
} from '../actions/actionTypes';

const initialState = {
  allArticles: [],
  error: ''
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ARTICLES:
      return {
        ...state,
        allArticles: action.payload,
      };
    case GET_ALL_ARTICLES_ERROR:
      return {
        ...state,
        error: ''
      };
    default:
      return state;
  }
};

export default articleReducer;
