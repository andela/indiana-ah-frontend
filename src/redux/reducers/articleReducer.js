import {
  GET_ALL_ARTICLES,
  NO_ARTICLES,
  GET_ALL_ARTICLES_LOADING,
  GET_ALL_ARTICLES_ERROR,
  CREATE_ARTICLE,
  CREATE_ARTICLE_LOADING
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  allArticles: [],
  error: false
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ARTICLES:
      return {
        ...state,
        allArticles: action.payload,
        isLoading: false,
        error: false
      };
    case GET_ALL_ARTICLES_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case NO_ARTICLES:
      return {
        ...state,
        allArticles: action.payload,
        isLoading: false,
        error: false
      };
    case GET_ALL_ARTICLES_ERROR:
      return {
        ...state,
        allArticles: action.payload,
        isLoading: false,
        error: true,
      };
    case CREATE_ARTICLE_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case CREATE_ARTICLE:
      return { ...state, isLoading: false, allArticles: action.article };
    default:
      return state;
  }
};

export default articleReducer;
