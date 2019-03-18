import { sendHttpRequest } from '../../../utils';
import {
  GET_ALL_USER_ARTICLES_REQUEST,
  GET_ALL_USER_ARTICLES_FAILURE,
  GET_ALL_USER_ARTICLES_SUCCESS
} from './actionTypes';

export const getAllUserArticles = (username, query) => async (dispatch) => {
  dispatch({ type: GET_ALL_USER_ARTICLES_REQUEST });
  const { articles } = await sendHttpRequest(`/user/${username}`);
};
