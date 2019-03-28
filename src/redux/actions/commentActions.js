import { toast } from 'react-toastify';
import {
  ADD_COMMENT, GET_ALL_ARTICLE_COMMENTS,
  DELETE_COMMENT, COMMENTS_LOADING
} from './actionTypes';
import { sendHttpRequest } from '../../utils/index';

export const addComment = (articleSlug, commentData) => async (dispatch, getState) => {
  const user = getState().user.userData;
  const commenter = {
    name: user.name,
    username: user.username,
    imageUrl: user.imageUrl
  };
  dispatch({ type: COMMENTS_LOADING });
  try {
    const response = await sendHttpRequest(`/articles/${articleSlug}/comments`, 'POST', commentData);
    const commentDetails = response.data;
    commentDetails.commenter = commenter;
    return dispatch({ type: ADD_COMMENT, payload: commentDetails });
  } catch ({ response }) {
    switch (response.status) {
      case 404:
      case 401:
        return toast.error(response.data.message);
      default:
        return toast.error(`Cannot comment on this article at the moment.
          Please try again later`);
    }
  }
};

export const getArticleComments = articleSlug => async (dispatch) => {
  try {
    const response = await sendHttpRequest(`/articles/${articleSlug}/comments`, 'GET');
    return dispatch({ type: GET_ALL_ARTICLE_COMMENTS, payload: response.comments });
  } catch ({ response }) {
    switch (response.status) {
      case 404:
        return toast.error(response.data.message);
      case 401:
        return toast.error(response.data.message);
      default:
        return toast.error(`Cannot fetch the comments on this article at the moment. 
          Please try again later`);
    }
  }
};

export const deleteComment = id => async (dispatch) => {
  dispatch({ type: COMMENTS_LOADING });
  try {
    const response = await sendHttpRequest(`/comments/${id}`, 'DELETE', { commentId: id });
    toast.success(response.message);
    return dispatch({ type: DELETE_COMMENT, id });
  } catch (error) {
    switch (error.response.status) {
      case 404:
      case 401:
        return toast.error(error.response.data.message);
      default:
        return toast.error(`Cannot delete this comment at the moment.
          Please try again later`);
    }
  }
};
