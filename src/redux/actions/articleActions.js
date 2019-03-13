import {
  GET_ALL_ARTICLES, GET_ALL_ARTICLES_ERROR
} from './actionTypes';
import { sendHttpRequest } from '../../utils';

const getAllArticles = () => async (dispatch) => {
  try {
    const { articles } = await sendHttpRequest('/articles?page=1&limit=10', 'GET');
    dispatch({ type: GET_ALL_ARTICLES, payload: articles });
  } catch ({ response }) {
    dispatch({
      type: GET_ALL_ARTICLES_ERROR,
      payload: response
    });
  }
};

export default getAllArticles;
