import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getSingleArticle from '../../redux/actions/getSingleArticleActions/getSingleArticleActions';
import { bookmarkLogo, twitter, facebook } from '../../assets/images/svg';
import LikeComponent from '../common/LikeComponent';
import DislikeComponent from '../common/DislikeComponent';
import CommentIconComponent from '../common/CommentIconComponent';

class SingleArticle extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { slug } = match.params;
    this.props.getSingleArticle(slug);
  }

  render() {
    if (!Object.keys(this.props.singleArticle.article).length) {
      return <h1>Fetching Articles</h1>;
    }
    const {
      articleTitle,
      timeToRead,
      imageUrl,
      tags,
      author,
      createdAt,
      articleBody
    } = this.props.singleArticle.article;
    const articleTags = tags.split(',').map((tag, index) => (
      <span className="article-tags" key={index}>
        {tag}
      </span>
    ));
    const dateCreated = new Date(createdAt);
    const displayedDate = `${dateCreated.getDate()}/${dateCreated.getMonth()}/${dateCreated.getFullYear()}`;
    return (
      <div className="SingleArticle">
        <div className="heading-section">
          <h1 className="heading-primary">{articleTitle}</h1>
          <div className="heading-info">
            <div className="article-info">
              <p className="author"> written by {author.username}</p>
              <img
                src={author.imageUrl}
                alt="user-image"
                width="50"
                height="50"
                className="user-image"
              />
              <button className="follow-btn">Follow</button>
              <img src={bookmarkLogo} className="bookmarkLogo" />
            </div>
            <p className="date-created">{displayedDate}</p>
            <p className="time-to-read">{timeToRead}</p>
          </div>
        </div>
        <section className="article-image-container">
          <img src={imageUrl} alt="article-image" className="article-image" />
        </section>
        <section className="article-body-container">
          <p className="article-body">{articleBody}</p>
          <div className="tags-container">{articleTags}</div>
          <section className="reaction-share-section">
            <div className="reaction-container">
              <LikeComponent className="reaction-logo" likeCount="5" color="rgba(0,0,0,.5)" />
              <DislikeComponent className="reaction-logo" dislikeCount="5" color="rgba(0,0,0,.5)" />
              <CommentIconComponent className="reaction-logo" commentCount="5" />
            </div>
            <div className="share-container">
              <span className="social share-text">Share on</span>
              <img src={facebook} alt="facebook logo" className="social" />
              <img src={twitter} alt="twitter logo" className="social" />
            </div>
          </section>
        </section>
      </div>
    );
  }
}

SingleArticle.propTypes = {
  getSingleArticle: PropTypes.func,
  singleArticle: PropTypes.object,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired
};

const mapStateToProps = state => ({
  singleArticle: state.singleArticle
});

export default connect(
  mapStateToProps,
  { getSingleArticle }
)(SingleArticle);
