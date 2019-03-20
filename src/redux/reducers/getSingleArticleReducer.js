import {
  GET_SINGLE_ARTICLE_LOADING,
  GET_SINGLE_ARTICLE_SUCCESS
} from '../actions/actionTypes';

const initialArticleState = {
  isLoading: false,
  article: {}
};

const getSingleArticleReducer = (state = initialArticleState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_ARTICLE_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        article: payload
      };
    default:
      return state;
  }
};

export default getSingleArticleReducer;
