import React from 'react';
import PropTypes from 'prop-types';
import Commentitem from './CommentItem.jsx';

export const CommentFeed = ({ comments }) => (comments.length > 0
  ? comments.map(comment => (
    <Commentitem key={comment.id} comment={comment} />
  )) : (<h2>No comments yet for this article.</h2>));

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentFeed;
