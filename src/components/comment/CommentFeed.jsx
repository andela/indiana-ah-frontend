import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem.jsx';

export const CommentFeed = ({ comments }) => comments.map(comment => (
  <CommentItem key={comment.id} comment={comment} />
));

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentFeed;
