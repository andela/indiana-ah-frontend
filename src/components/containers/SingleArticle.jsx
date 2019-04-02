import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getSingleArticle from '../../redux/actions/getSingleArticleActions/getSingleArticleActions';
import reactToArticle from '../../redux/actions/reactionActions';
import { twitter, facebook } from '../../assets/images/svg';
import addBookmark from '../../redux/actions/bookmarkActions';
import { getAllUsersBookMarkedArticles } from '../../redux/actions/articleActions/articleActions';
import LikeComponent from '../common/LikeComponent';
import DislikeComponent from '../common/DislikeComponent';
import CommentIconComponent from '../common/CommentIconComponent';
import Footer from '../common/footer.jsx';
import SignupContainer from '../SignupFormContainer.jsx';
import LoginContainer from '../LoginFormContainer.jsx';
import Modal from '../common/Modal.jsx';
import { getArticleComments } from '../../redux/actions/commentActions';
import Commentform from '../comment/CommentForm.jsx';
import Commentfeed from '../comment/CommentFeed.jsx';

class SingleArticle extends Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }));
  };

  closeModal = () => {
    const {
      auth: { isLoading }
    } = this.props;
    if (!isLoading) this.setState(() => ({ modalIsOpen: false }));
  };

  displayForm = (form) => {
    this.setState({ modalIsOpen: true, modalContent: form });
  };

  componentDidMount() {
    const { match, history } = this.props;
    const { slug } = match.params;
    this.props.getSingleArticle(slug, history);
    this.props.getArticleComments(slug);
    if (this.props.auth.isVerified) this.props.getAllUsersBookMarkedArticles();
  }

  handleBookmarkclick = () => {
    const articleId = this.props.singleArticle.article.id;
    this.props.addBookmark(articleId);
  };

  render() {
    const { modalContent } = this.state;
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
      slug,
      articleTitle,
      timeToRead,
      likes,
      dislikes,
      imageUrl,
      tags,
      likedByMe,
      dislikedByMe,
      author,
      createdAt,
      articleBody
    } = this.props.singleArticle.article;

    const { isVerified } = this.props.auth;
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
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
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
                {isVerified && viewingUser !== author.username && (
                  <div className="follow-bookmark-box">
                    <button className="follow-btn">Follow</button>
                    <span>
                      <i
                        onClick={this.handleBookmarkclick}
                        className={
                          currentBookmark
                            ? 'fas fa-bookmark fa-4x bookmarked-icon'
                            : 'far fa-bookmark fa-4x unbookmarked-icon'
                        }
                      />
                    </span>
                  </div>
                )}
              </div>
              <p className="date-created">{displayedDate}</p>
              <p className="time-to-read">{timeToRead}</p>
            </div>
          </div>
          {imageUrl && <section className="article-image-container" style={imageStyle} />}
          <section className="article-body-container">
            <div className="article-body" dangerouslySetInnerHTML={createMarkup()} />
            <div className="tags-container">{articleTags}</div>
            <section className="reaction-share-section">
              <div className="reaction-container">
                <LikeComponent
                  className="reaction-logo"
                  likeCount={likes}
                  color={likedByMe ? '#0B41CD' : 'rgba(0,0,0,.5)'}
                  id={slug}
                  onClick={
                    this.props.auth.isVerified
                      ? () => this.props.reactToArticle(slug, 'like')
                      : () => this.displayForm('login')
                  }
                  likedByMe={likedByMe}
                />
                <DislikeComponent
                  className="reaction-logo"
                  dislikeCount={dislikes}
                  color={dislikedByMe ? '#0B41CD' : 'rgba(0,0,0,.5)'}
                  onClick={
                    this.props.auth.isVerified
                      ? () => this.props.reactToArticle(slug, 'dislike')
                      : () => this.displayForm('login')
                  }
                />
                <CommentIconComponent className="reaction-logo" commentCount={this.props.comments.length} />
              </div>
              <div className="share-container">
                <span className="social share-text">Share on</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${
                    window.location.href
                  }`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={facebook} alt="facebook logo" className="social" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                  className="twitter-share-button"
                  rel="noopener noreferrer"
                  target="_blank">
                  <img src={twitter} alt="twitter logo" className="social" />
                </a>
              </div>
            </section>
            <section className='comment-section'>
            {
              isVerified && <><div className='container pt-5 pb-5'>
              <Commentform slug={slug} />
            </div>
            <hr /></>
            }
              <div className='container pt-5 pb-5'>
                <h2 >Comments</h2>
                <Commentfeed comments={this.props.comments} />
              </div>
          </section>
          </section>
          <Modal
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            body={
              modalContent === 'login' ? (
                <LoginContainer
                  displayForm={this.displayForm}
                  closeModal={this.closeModal}
                />
              ) : (
                <SignupContainer
                  displayForm={this.displayForm}
                  closeModal={this.closeModal}
                />
              )
            }
          />
        </div>
        <Footer />
      </>
    );
  }
}

SingleArticle.propTypes = {
  comments: PropTypes.array.isRequired,
  addBookmark: PropTypes.func.isRequired,
  getArticleComments: PropTypes.func.isRequired,
  getSingleArticle: PropTypes.func.isRequired,
  getAllUsersBookMarkedArticles: PropTypes.func.isRequired,
  bookmarkedArticles: PropTypes.object.isRequired,
  singleArticle: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  auth: PropTypes.object,
  reactToArticle: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  singleArticle: state.singleArticle,
  auth: state.auth,
  user: state.user,
  bookmarkedArticles: state.bookmarkedArticles,
  comments: state.comments.comments
});

export { SingleArticle };

export default connect(
  mapStateToProps,
  {
    getSingleArticle,
    addBookmark,
    getAllUsersBookMarkedArticles,
    reactToArticle,
    getArticleComments
  }
)(SingleArticle);
