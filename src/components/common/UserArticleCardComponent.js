import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
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
  slug,
  likeCount,
  dislikeCount,
  commentCount,
  timeCount
}) => (
  <Fragment>
    <Card className="user-article-card">
      <div className="article-image-wrapper">
        <img src={img} className="img-fluid" />
      </div>

      <Card.Body className="article-card-body">
        <NavLink to={`/articles/${slug}`}>
          <div className="article-title">
            <b className="text-body">{articleTitle}</b>
          </div>
          <div className="article-body">{articleBody}</div>
        </NavLink>
        <div className="tags-wrapper">
          {tags.split(',').map((eachTag, index) => (
            <BadgeComponent key={index} eachTagDetail={eachTag} />
          ))}
        </div>

        <div className="container">
          <div className="row no-gutters">
            <div className="icons">
              <div className="row">
                {timeCount === 'false' ? (
                  ''
                ) : (
                  <span className="icon-item timer">
                    <TimerComponent timeCount={timeCount} />
                  </span>
                )}
                <span className="icon-item">
                  <LikeComponent likeCount={likeCount} color="black" />
                </span>
                <span className="icon-item">
                  <DislikeComponent dislikeCount={dislikeCount} color="black" />
                </span>
                <span className="icon-item">
                  <CommentIconComponent commentCount={commentCount} />
                </span>
              </div>
            </div>
            <div className='action-button'>
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
  slug: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired
};

export default UserArticleCard;
