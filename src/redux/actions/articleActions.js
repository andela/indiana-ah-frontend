import Swal from 'sweetalert2';
import {
  GET_ALL_ARTICLES
} from './actionTypes';
import { sendHttpRequest } from '../../utils';

const getAllArticles = () => async (dispatch) => {
  try {
    const { articles } = await sendHttpRequest('/articles?page=1&limit=10', 'GET');
    dispatch({ type: GET_ALL_ARTICLES, payload: articles });
  } catch ({ response }) {
    Swal.fire({
      title: 'Error!',
      text: response,
      type: 'error',
      timer: 3000,
      showConfirmButton: false,
      width: 400,
    });
  }
};

export default getAllArticles;
