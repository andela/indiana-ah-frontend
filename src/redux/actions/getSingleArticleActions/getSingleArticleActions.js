/* eslint-disable consistent-return */
import {
  GET_SINGLE_ARTICLE_LOADING,
  GET_SINGLE_ARTICLE_SUCCESS,
} from '../actionTypes';
import { sendHttpRequest } from '../../../utils';

const getSingleArticle = (slug, history) => async (dispatch, getState) => {
  const { id } = getState().user.userData;
  dispatch({
    type: GET_SINGLE_ARTICLE_LOADING
  });
  try {
    const { article, timeToRead } = await sendHttpRequest(`/articles/${slug}`, 'GET');
    const myReaction = article.Reactions.find(reaction => reaction.userId === id);
    article.likedByMe = false;
    article.dislikedByMe = false;
    if (myReaction) {
      article.likedByMe = myReaction.reactionType === 'like';
      article.dislikedByMe = myReaction.reactionType === 'dislike';
    }
    article.timeToRead = timeToRead;
    return dispatch({
      type: GET_SINGLE_ARTICLE_SUCCESS,
      payload: article
    });
  } catch ({ response }) {
    return history.push('/not-found');
  }
};

export default getSingleArticle;
