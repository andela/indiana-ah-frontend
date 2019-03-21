import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getSingleArticle
  from '../../redux/actions/getSingleArticleActions/getSingleArticleActions';
import { bookmarkLogo, twitter, facebook } from '../../assets/images/svg';
import LikeComponent from '../common/LikeComponent';
import DislikeComponent from '../common/DislikeComponent';
import CommentIconComponent from '../common/CommentIconComponent';

export class SingleArticle extends Component {
  componentDidMount() {
    const { match, history } = this.props;
    const { slug } = match.params;
    this.props.getSingleArticle(slug, history);
  }

  render() {
    const delayDisplay = (
      <div
        className="carousel-spinner
      spinner-grow spinner-grow-lg text-primary"
      />
    );
    const {
      articleTitle,
      timeToRead,
      Comments,
      likes,
      dislikes,
      tags,
      author,
      createdAt,
      articleBody
    } = this.props.singleArticle.article;
    let { imageUrl } = this.props.singleArticle.article;
    let articleTags = null;
    const createMarkup = () => ({ __html: articleBody });
    if (tags) {
      articleTags = tags.split(',').map((tag, index) => (
        <span className="article-tags" key={index}>
          {tag}
        </span>
      ));
    }
    if (!imageUrl) {
      imageUrl = 'https://images.unsplash.com/photo-1521120413309-42e7eada0334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';
    }
    const dateCreated = new Date(createdAt);
    const displayedDate = `${dateCreated.getDate()}
    /${dateCreated.getMonth()}/${dateCreated.getFullYear()}`;
    return (
      <>
        {!this.props.singleArticle.article.articleBody ? (
          delayDisplay
        ) : (
          <div className="SingleArticle">
            <div className="heading-section">
              <h1 className="heading-primary">{articleTitle}</h1>
              <div className="heading-info">
                <div className="article-info">
                  <div className="author-image-box">
                    <p className="author"> written by {author.username}</p>
                    <img
                      src={author.imageUrl}
                      alt="user-image"
                      width="50"
                      height="50"
                      className="user-image"
                    />
                  </div>
                  <div className="follow-bookmark-box">
                    <button className="follow-btn">Follow</button>
                    <img src={bookmarkLogo} className="bookmarkLogo" />
                  </div>
                </div>
                <p className="date-created">{displayedDate}</p>
                <p className="time-to-read">{timeToRead}</p>
              </div>
            </div>
            <section className="article-image-container">
              <img src={imageUrl} alt="article-image" className="article-image" />
            </section>
            <section className="article-body-container">
              <div className="article-body" dangerouslySetInnerHTML={createMarkup()} />
              <div className="tags-container">{articleTags}</div>
              <section className="reaction-share-section">
                <div className="reaction-container">
                  <LikeComponent
                    className="reaction-logo"
                    likeCount={likes}
                    color="rgba(0,0,0,.5)"
                  />
                  <DislikeComponent
                    className="reaction-logo"
                    dislikeCount={dislikes}
                    color="rgba(0,0,0,.5)"
                  />
                  <CommentIconComponent
                    className="reaction-logo"
                    commentCount={Comments}
                  />
                </div>
                <div className="share-container">
                  <span className="social share-text">Share on</span>
                  <img src={facebook} alt="facebook logo" className="social" />
                  <img src={twitter} alt="twitter logo" className="social" />
                </div>
              </section>
            </section>
          </div>
        )}
      </>
    );
  }
}

SingleArticle.propTypes = {
  getSingleArticle: PropTypes.func.isRequired,
  singleArticle: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  singleArticle: state.singleArticle
});

export default connect(
  mapStateToProps,
  { getSingleArticle }
)(SingleArticle);
