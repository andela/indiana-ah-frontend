import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getSingleArticle
  from '../../redux/actions/getSingleArticleActions/getSingleArticleActions';
import { twitter, facebook } from '../../assets/images/svg';
import addBookmark from '../../redux/actions/bookmarkActions';
import { getAllUsersBookMarkedArticles }
  from '../../redux/actions/articleActions/articleActions';
import LikeComponent from '../common/LikeComponent';
import DislikeComponent from '../common/DislikeComponent';
import CommentIconComponent from '../common/CommentIconComponent';
import Footer from '../common/footer.jsx';

class SingleArticle extends Component {
  componentDidMount() {
    const { match, history } = this.props;
    const { slug } = match.params;
    this.props.getSingleArticle(slug, history);
    this.props.getAllUsersBookMarkedArticles();
  }

  handleBookmarkclick = () => {
    const articleId = this.props.singleArticle.article.id;
    this.props.addBookmark(articleId);
  };

  render() {
    let articleTags = null;
    let viewingUser;
    const delayDisplay = (
      <div
        className="carousel-spinner
      spinner-grow spinner-grow-lg text-primary"
      />
    );
    if (this.props.user.userData) {
      viewingUser = this.props.user.userData.username;
    }
    const {
      articleTitle,
      timeToRead,
      Comments,
      likes,
      dislikes,
      imageUrl,
      tags,
      author,
      createdAt,
      articleBody
    } = this.props.singleArticle.article;

    const currentBookmark = this.props.bookmarkedArticles.userBookmarks.find(
      article => article.articleId === this.props.singleArticle.article.id
    );

    const createMarkup = () => ({ __html: articleBody });
    if (tags) {
      articleTags = tags.split(',').map((tag, index) => (
        <span className="article-tags" key={index}>
          {tag}
        </span>
      ));
    }
    const imageStyle = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'none'
    };
    const dateCreated = new Date(createdAt);
    const displayedDate = `${dateCreated.getDate()}
    /${dateCreated.getMonth()}/${dateCreated.getFullYear()}`;
    if (
      this.props.singleArticle.isLoading
      || !this.props.singleArticle.article.articleBody
    ) return delayDisplay;

    return (
      <>
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
                {this.props.auth.isVerified && viewingUser !== author.username && (
                  <div className="follow-bookmark-box">
                    <button className="follow-btn">Follow</button>
                      <span>
                        <i
                          onClick={this.handleBookmarkclick}
                          className={currentBookmark ? 'fas fa-bookmark fa-4x bookmarked-icon' : 'far fa-bookmark fa-4x unbookmarked-icon'}
                        />
                      </span>
                  </div>
                )}
              </div>
              <p className="date-created">{displayedDate}</p>
              <p className="time-to-read">{timeToRead}</p>
            </div>
          </div>
          {imageUrl && (
            <section className="article-image-container" style={imageStyle}>
            </section>
          )}
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
                <CommentIconComponent className="reaction-logo" commentCount={Comments} />
              </div>
              <div className="share-container">
                <span className="social share-text">Share on</span>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  rel='noopener noreferrer' target='_blank'>
                  <img src={facebook} alt="facebook logo" className="social" />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                  className='twitter-share-button'
                  rel='noopener noreferrer' target='_blank'>
                  <img src={twitter} alt="twitter logo" className="social" />
                </a>
              </div>
            </section>
          </section>
        </div>
        <Footer/>
      </>
    );
  }
}

SingleArticle.propTypes = {
  addBookmark: PropTypes.func.isRequired,
  getSingleArticle: PropTypes.func.isRequired,
  getAllUsersBookMarkedArticles: PropTypes.func.isRequired,
  bookmarkedArticles: PropTypes.object.isRequired,
  singleArticle: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  auth: PropTypes.object,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  singleArticle: state.singleArticle,
  auth: state.auth,
  user: state.user,
  bookmarkedArticles: state.bookmarkedArticles
});

export { SingleArticle };

export default connect(
  mapStateToProps,
  { getSingleArticle, addBookmark, getAllUsersBookMarkedArticles }
)(SingleArticle);
