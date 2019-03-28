import { sendHttpRequest } from '../../utils';
import { LIKE_ARTICLE, DISLIKE_ARTICLE } from './actionTypes';

const reactToArticle = (slug, reactionType) => async (dispatch) => {
  if (reactionType === 'like') {
    dispatch({ type: LIKE_ARTICLE });
  } else {
    dispatch({ type: DISLIKE_ARTICLE });
  }

  try {
    await sendHttpRequest(`/articles/${slug}/reaction`, 'POST', {
      reactionType
    });
  } catch (error) {
    return error;
  }
};

export default reactToArticle;
