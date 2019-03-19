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
    type: GET_SINGLE_ARTICLE_LOADING,
    payload: {
      isLoading: true
    }
  });
  try {
    const response = await sendHttpRequest(`/articles/${slug}`, 'GET');
    return dispatch({
      type: GET_SINGLE_ARTICLE_SUCCESS,
      payload: {
        isLoading: false,
        article: response.article.articleBody,
        articleTitle: response.article.articleTitle,
        authorImage: response.article.author.imageUrl,
        userName: response.article.author.username,
        createdAt: response.article.createdAt
      }
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
