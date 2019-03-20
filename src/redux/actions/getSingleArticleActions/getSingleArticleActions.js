/* eslint-disable consistent-return */
import Swal from 'sweetalert2';
import {
  GET_SINGLE_ARTICLE_LOADING,
  GET_SINGLE_ARTICLE_FAILURE,
  GET_SINGLE_ARTICLE_SUCCESS
} from '../actionTypes';
import { sendHttpRequest } from '../../../utils';

const getSingleArticle = slug => async (dispatch) => {
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
    Swal.fire({
      title: 'Error!',
      text: response,
      type: 'error',
      timer: 3000,
      showConfirmButton: false,
      width: 400
    });
  }
};

export default getSingleArticle;
