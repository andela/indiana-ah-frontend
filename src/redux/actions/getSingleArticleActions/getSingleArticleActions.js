import React from 'react';
import { toast } from 'react-toastify';
import { GET_SINGLE_ARTICLE_LOADING, GET_SINGLE_ARTICLE_SUCCESS } from '../actionTypes';
import { sendHttpRequest } from '../../../utils';

const getSingleArticle = (slug, history) => async (dispatch) => {
  dispatch({
    type: GET_SINGLE_ARTICLE_LOADING
  });
  try {
    const { article, timeToRead } = await sendHttpRequest(`/articles/${slug}`, 'GET');
    article.timeToRead = timeToRead;
    dispatch({
      type: GET_SINGLE_ARTICLE_SUCCESS,
      payload: article
    });
  } catch ({ response }) {
    if (response.status === 404) {
      history.push('/not-found');
    } else {
      history.push('/');
      toast.error(<div>Request was not successful at the moment. Try again later</div>);
    }
  }
};

export default getSingleArticle;
