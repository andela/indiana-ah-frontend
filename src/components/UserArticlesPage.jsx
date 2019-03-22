import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBarProgress from 'react-topbar-progress-indicator';
import PropTypes from 'prop-types';
import moment from 'moment';
import getAllUserArticles from '../redux/actions/userArticlesActions';
import UserArticleCardComponent from './common/UserArticleCardComponent';
import Pagination from './common/Pagination';
import { setAndGetCurrentPage } from '../utils/index';

class UserArticles extends Component {
  state = {};

  async componentDidUpdate(prevProps) {
    if (prevProps.location.search === this.props.location.search) return;
    const currentPage = setAndGetCurrentPage(this);
    const { username } = this.props.userData;
    const query = `page=${currentPage}&limit=4`;
    await this.props.getAllUserArticles(username, query);
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    const { username } = this.props.userData;
    const currentPage = setAndGetCurrentPage(this);
    const query = `page=${currentPage}&limit=4`;
    this.props.getAllUserArticles(username, query);
  }

  render() {
    const { currentPage } = this.state;
    const { allUserArticles } = this.props;
    if (!Object.keys(allUserArticles.articleData).length) return <TopBarProgress />;
    if (allUserArticles.articleData.message) return <h2>You have no articles</h2>;
    return (
      <div className="user-articles-section">
        {allUserArticles.isLoading && <TopBarProgress />}
        {allUserArticles.articleData.articles.map((article, index) => (
          <UserArticleCardComponent
            className="user-article-card"
            key={index}
            img={
              article.imageUrl
              || 'https://images.unsplash.com/photo-1552926419-96c4628afd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
            }
            articleTitle={article.articleTitle}
            articleBody={article.articleBody}
            tags={article.tags}
            likeCount={article.likes}
            dislikeCount={article.dislikes}
            commentCount={article.Comments.length}
            slug={article.slug}
            timeCount={moment(article.createdAt).fromNow()}
          />
        ))}
        <Pagination
          numberOfPages={allUserArticles.articleData.totalNumberOfPages}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

UserArticles.propTypes = {
  userData: PropTypes.object,
  location: PropTypes.object,
  getAllUserArticles: PropTypes.func,
  allUserArticles: PropTypes.object
};

const mapStateToProps = state => ({
  allUserArticles: state.allUserArticles,
  userData: state.user.userData
});

UserArticles.propTypes = {
  userData: PropTypes.object,
  allUserArticles: PropTypes.array,
  getAllUserArticles: PropTypes.func,
  location: PropTypes.object
};

export default connect(
  mapStateToProps,
  { getAllUserArticles }
)(UserArticles);
