import {
  ADD_COMMENT, GET_ALL_ARTICLE_COMMENTS, COMMENTS_LOADING, DELETE_COMMENT
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  comments: []
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_COMMENT:
      return {
        ...state,
        isLoading: false,
        comments: [...state.comments, action.payload]
      };

    case GET_ALL_ARTICLE_COMMENTS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        isLoading: false,
        comments: state.comments.filter(comment => comment.id !== action.id),
      };
    default:
      return state;
  }
};
export default commentReducer;
