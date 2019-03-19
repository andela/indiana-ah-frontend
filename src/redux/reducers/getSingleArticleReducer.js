import {
  GET_SINGLE_ARTICLE_LOADING,
  GET_SINGLE_ARTICLE_SUCCESS
} from '../actions/actionTypes';

const initialArticleState = {
  article: '',
  isLoading: false,
  authorImage: null,
  articleTitle: '',
  userName: null,
  createdAt: ''
};

const getSingleArticleReducer = (state = initialArticleState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_ARTICLE_LOADING:
      return {
        ...state,
        ...payload
      };
    case GET_SINGLE_ARTICLE_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default getSingleArticleReducer;
