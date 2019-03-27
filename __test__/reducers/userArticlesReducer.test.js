import {
  GET_ALL_USER_ARTICLES_REQUEST,
  GET_ALL_USER_ARTICLES_SUCCESS,
  GET_ALL_USER_ARTICLES_FAILURE
} from '../../src/redux/actions/actionTypes';

import userArticlesReducer from '../../src/redux/reducers/userArticlesReducer';

const initialState = {
  isLoading: false,
  articleData: {},
  error: ''
};

const responseData = { articles: [{ articleTitle: 'Im the man' }] };

describe('user articles reducer test', () => {
  it('should test the initial state', () => {
    expect(userArticlesReducer(undefined, {})).toEqual(initialState);
  });

  it('should test handle the GET_ALL_USER_ARTICLES_REQUEST action', () => {
    expect(
      userArticlesReducer(initialState, { type: GET_ALL_USER_ARTICLES_REQUEST })
    ).toEqual({ ...initialState, isLoading: true });
  });

  it('should handle the GET_ALL_USER_ARTICLES_FAILURE action', () => {
    expect(
      userArticlesReducer(initialState, {
        type: GET_ALL_USER_ARTICLES_FAILURE,
        payload: 'User not found'
      })
    ).toEqual({ ...initialState, error: 'User not found' });
  });

  it('should handle the GET_ALL_USER_ARTICLES_SUCCESS action', () => {
    expect(
      userArticlesReducer(initialState, {
        type: GET_ALL_USER_ARTICLES_SUCCESS,
        payload: responseData
      })
    ).toEqual({ ...initialState, articleData: responseData });
  });
});
