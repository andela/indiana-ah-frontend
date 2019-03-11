import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import LikeComponent from './LikeComponent';
import DislikeComponent from './DislikeComponent';
import CommentComponent from './CommentComponent';

const CardComponent = ({
  img, title, text, likeCount, dislikeCount, commentCount
}) => (
<Fragment>
<Card style={{ width: '35rem', height: '50rem' }}>
  <Card.Img variant='top' src= {img}/>
  <Card.Body className='pb-0'>
  <div className='title-height'><b>{title}</b></div>

  <div className='text-height'>
  <Card.Text className = 'cardText'>
      {text}
    </Card.Text>
  </div>

<div className='container'>
  <div className='row mt-4'>
  <div className='col pl-0'>
  < LikeComponent likeCount={likeCount} color='black'/>
  </div>
  <div className='col'>
  < DislikeComponent dislikeCount={dislikeCount} color='black'/>
  </div>
  <div className='col'>
  < CommentComponent commentCount={commentCount}/>
  </div>
  <div className='col'>
</div>
</div>
</div>
  </Card.Body>
</Card>
</Fragment>
);

CardComponent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};

export default CardComponent;
