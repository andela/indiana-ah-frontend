import { GET_ALL_ARTICLES } from '../actions/actionTypes';

const initialState = {
  allArticles: [],
  error: ''
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ARTICLES:
      return {
        ...state,
        allArticles: action.payload
      };
    default:
      return state;
  }
};

export default articleReducer;
