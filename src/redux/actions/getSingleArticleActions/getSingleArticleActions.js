/* eslint-disable consistent-return */
import {
  GET_SINGLE_ARTICLE_LOADING,
  GET_SINGLE_ARTICLE_SUCCESS
} from '../actionTypes';
import { sendHttpRequest } from '../../../utils';

const getSingleArticle = (slug, history) => async (dispatch) => {
  dispatch({
    type: GET_SINGLE_ARTICLE_LOADING
  });
  try {
    const { article, timeToRead } = await sendHttpRequest(`/articles/${slug}`, 'GET');
    article.timeToRead = timeToRead;
    return dispatch({
      type: GET_SINGLE_ARTICLE_SUCCESS,
      payload: article
    });
  } catch ({ response }) {
    return history.push('/not-found');
  }
};

export default getSingleArticle;
