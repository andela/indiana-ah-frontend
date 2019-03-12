import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CommentIcon from '../../images/icons/chat-1.png';

const CommentComponent = ({ commentCount }) => (
<Fragment>
<span className = 'icon-holder'>
<img src = {CommentIcon} alt = 'CommentIcon' className= 'icon-height icon_margin'/>
<sub className='count'>{commentCount}</sub>
</span>
</Fragment>
);

CommentComponent.propTypes = {
  commentCount: PropTypes.number.isRequired,
};

export default CommentComponent;
