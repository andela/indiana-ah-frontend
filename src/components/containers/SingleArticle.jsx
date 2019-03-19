import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getSingleArticle from '../../redux/actions/getSingleArticleActions/getSingleArticleActions';
import { bookmarkLogo } from '../../assets/images/svg';

class SingleArticle extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { slug } = match.params;
    this.props.getSingleArticle(slug);
  }

  render() {
    // return <div> Hello this works{console.log(this.props.singleArticle)}</div>;
    const {
      articleTitle, userName, authorImage, createdAt
    } = this.props.singleArticle;
    console.log(this.props.singleArticle);
    return (
      <div className="SingleArticle">
        <div className="heading-section">
          <h1 className="heading-primary">{articleTitle}</h1>
          <div>
            <div className="article-info">
              <p className="author"> written by {userName}</p>
              <img src={authorImage} alt="user-image" width="50" height="50" className="user-image" />
              <button className="follow-btn">Follow</button>
              <img src={bookmarkLogo} className="bookmarkLogo" />
            </div>
            <p>{createdAt}</p>
            <p></p>
          </div>
        </div>
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
