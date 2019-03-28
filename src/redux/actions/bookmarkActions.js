import { toast } from 'react-toastify';
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from './actionTypes';
import { sendHttpRequest } from '../../utils/index';

const addBookmark = id => async (dispatch) => {
  try {
    const response = await sendHttpRequest(`articles/${id}/bookmark`, 'post');
    if (response.bookmark) {
      toast.success(response.message);
      return dispatch({ type: ADD_BOOKMARK, payload: response.bookmark });
    }
    toast.success(response.message);
    return dispatch({ type: REMOVE_BOOKMARK, id });
  } catch (error) {
    switch (error.response.status) {
      case 404:
      case 401:
        return toast.error(error.response.data.message);
      default:
        return toast.error(`Cannot bookmark this article at the moment. 
          Please try again later`);
    }
  }
};
export default addBookmark;
