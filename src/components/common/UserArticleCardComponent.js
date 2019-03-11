import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import BadgeComponent from './BadgeComponent';
import LikeComponent from './LikeComponent';
import DislikeComponent from './DislikeComponent';
import CommentComponent from './CommentComponent';
import TimerComponent from './TimerComponent';
import BookmarkComponent from './BookmarkComponent';

const UserArticleCard = ({
  img,
  articleTitle,
  tags,
  likeCount,
  dislikeCount,
  commentCount,
  timeCount
}) => (
  <Fragment>
<Card style={{ width: '70rem', height: 'auto' }} className = 'mb-3 article-card'>
<div className = 'w-25 Article-image-wrapper pb-0'>
< img src= {img} className='img-fluid'/>
  </div>
  <Card.Body className = 'w-75 pb-0'>
    <div className = 'article-title'>
     <b className='text-body'>{articleTitle}</b>
    </div>
    <div className = 'tags-wrapper mb-4'>
   {tags.split(',')
     .map((eachTag, index) => <BadgeComponent key={index} eachTagDetail={eachTag} />)}
    </div>

<div className='container px-0'>
   <div className='row no-gutters'>
           <div className='col-9 pt-3'>
              <div className='row'>
                 { timeCount === 'false' ? ''
                   : <span className='col-4'>
                <TimerComponent timeCount={timeCount} />
              </span>}
                 <span className="col-2">
                   <LikeComponent likeCount={likeCount} color='blue' />
                 </span>
                 <span className="col-2">
                  <DislikeComponent dislikeCount={dislikeCount} color='black' />
                 </span>
                 <span className="col-2">
                 <CommentComponent commentCount={commentCount}/>
                 </span>
              </div>
            </div>
          <div className="col-3">
          { timeCount === 'false'
            ? <BookmarkComponent color='#FCC133'/>
            : <button type="button" className="btn btn-outline-primary">Primary</button>}

          </div>
   </div>
</div>
  </Card.Body>
</Card>
</Fragment>
);


UserArticleCard.propTypes = {
  img: PropTypes.string.isRequired,
  timeCount: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
};


export default UserArticleCard;
