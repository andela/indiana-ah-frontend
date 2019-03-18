/* eslint-disable consistent-return */
import Swal from 'sweetalert2';
import { GET_ALL_ARTICLES, NO_ARTICLES, GET_ALL_ARTICLES_LOADING } from '../actionTypes';
import { sendHttpRequest } from '../../../utils';

const getAllArticles = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ARTICLES_LOADING });
  try {
    const response = await sendHttpRequest('/articles?page=1&limit=10', 'GET');
    if ('message' in response) {
      return dispatch({ type: NO_ARTICLES, payload: [] });
    }
    localStorage.setItem('all articles', JSON.stringify(response.articles));
    return dispatch({ type: GET_ALL_ARTICLES, payload: response.articles });
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

export default getAllArticles;
