/* eslint-disable consistent-return */
import React from 'react';
import { toast } from 'react-toastify';

import { GET_ALL_ARTICLES, NO_ARTICLES, GET_ALL_ARTICLES_LOADING } from '../actionTypes';
import { sendHttpRequest } from '../../../utils';

const getAllArticles = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ARTICLES_LOADING });
  try {
    const response = await sendHttpRequest('/articles?page=1&limit=10', 'GET');
    if ('message' in response) {
      return dispatch({ type: NO_ARTICLES, payload: [] });
    }
    return dispatch({ type: GET_ALL_ARTICLES, payload: response.articles });
  } catch ({ response }) {
    return toast.error(
      <div>Request was not successful at the moment. Try again later</div>
    );
  }
};

export default getAllArticles;
