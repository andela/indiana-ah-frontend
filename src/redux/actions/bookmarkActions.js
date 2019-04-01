import thunk from 'redux-thunk';
import { toast } from 'react-toastify';
import configureMockStore from 'redux-mock-store';
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from './actionTypes';
import { sendHttpRequest } from '../../utils/index';

const addBookmark = id => async (dispatch, getState) => {
  const Article = getState().singleArticle.article;
  // const Article = { ...article };
  try {
    const response = await sendHttpRequest(`articles/${id}/bookmark`, 'post');
    if (response.bookmark) {
      const bookmarkDetails = response.bookmark;
      bookmarkDetails.Article = Article;
      toast.success(response.message);
      return dispatch({ type: ADD_BOOKMARK, payload: bookmarkDetails });
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
