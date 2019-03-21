import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import BadgeComponent from './BadgeComponent';
import LikeComponent from './LikeComponent';
import DislikeComponent from './DislikeComponent';
import CommentIconComponent from './CommentIconComponent';
import Button from '../../styles/styledComponents/Button.jsx';
import TimerComponent from './TimerComponent';
import BookmarkComponent from './BookmarkComponent';

const UserArticleCard = ({
  img,
  articleTitle,
  articleBody,
  tags,
  likeCount,
  dislikeCount,
  commentCount,
  timeCount
}) => (
  <Fragment>
    <Card className="mb-3 article-card user-article-card">
      <div className="Article-image-wrapper pb-0">
        <img src={img} className="img-fluid" />
      </div>
      <Card.Body className="pb-0 ml-5 card-body">
        <div className="article-title">
          <b className="text-body">{articleTitle}</b>
        </div>
        <div className="article-body">
          <b className="text-body">{articleBody}</b>
        </div>
        <div className="tags-wrapper mt-2">
          {tags.split(',').map((eachTag, index) => (
            <BadgeComponent key={index} eachTagDetail={eachTag} />
          ))}
        </div>

        <div className="container px-0">
          <div className="row no-gutters">
            <div className="col-9 pt-3">
              <div className="row">
                {timeCount === 'false' ? (
                  ''
                ) : (
                  <span className="col-3">
                    <TimerComponent timeCount={timeCount} />
                  </span>
                )}
                <span className="col-2">
                  <LikeComponent likeCount={likeCount} color="black" />
                </span>
                <span className="col-2">
                  <DislikeComponent dislikeCount={dislikeCount} color="black" />
                </span>
                <span className="col-2">
                  <CommentIconComponent commentCount={commentCount} />
                </span>
              </div>
            </div>
            <div>
              {timeCount === 'false' ? (
                <BookmarkComponent color="#FCC133" />
              ) : (
                <Button type="button" sm inlineButton className="btn btn-outline-primary">
                  Edit
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  </Fragment>
);

UserArticleCard.defaultProps = {
  tags: '',
  likeCount: 0,
  dislikeCount: 0,
  commentCount: 0,
};

UserArticleCard.propTypes = {
  img: PropTypes.string.isRequired,
  timeCount: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  articleBody: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired
};

export default UserArticleCard;
