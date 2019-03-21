import {
  GET_ALL_BOOKMARKS,
  GET_ALL_BOOKMARKS_LOADING,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  userBookmarks: [],
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKMARKS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_BOOKMARKS:
      return {
        ...state,
        userBookmarks: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
