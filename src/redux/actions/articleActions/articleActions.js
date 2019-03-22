import React from 'react';
import { toast } from 'react-toastify';

import {
  GET_ALL_ARTICLES,
  NO_ARTICLES,
  GET_ALL_ARTICLES_LOADING,
  GET_ALL_BOOKMARKS_LOADING,
  GET_ALL_BOOKMARKS,
  GET_ALL_BOOKMARKS_FAILURE,
  GET_ALL_ARTICLES_ERROR
} from '../actionTypes';
import { sendHttpRequest } from '../../../utils';

export const getAllArticles = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ARTICLES_LOADING });
  try {
    const response = await sendHttpRequest('/articles', 'GET');

    if ('message' in response) {
      return dispatch({ type: NO_ARTICLES, payload: [] });
    }
    return dispatch({ type: GET_ALL_ARTICLES, payload: response.articles });
  } catch ({ response }) {
    dispatch({ type: GET_ALL_ARTICLES_ERROR, payload: [] });
    return toast.error(
      <div>Request was not successful at the moment. Try again later</div>
    );
  }
};

export const getAllUsersBookMarkedArticles = () => async (dispatch) => {
  dispatch({ type: GET_ALL_BOOKMARKS_LOADING });
  try {
    console.log('i am being called');
    const response = await sendHttpRequest('/users/bookmarks', 'GET');
    if (response.message === 'You do not have any bookmarked article') {
      return dispatch({ type: GET_ALL_BOOKMARKS, payload: [] });
    }
    return dispatch({ type: GET_ALL_BOOKMARKS, payload: response.userBookmarks });
  } catch ({ response }) {
    dispatch({ type: GET_ALL_BOOKMARKS_FAILURE });
    return toast.error(
      <div>Request was not successful at the moment. Try again later</div>
    );
  }
};
