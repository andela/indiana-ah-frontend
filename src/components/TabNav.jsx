import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TabNavBar = ({ allUserArticles: { articleData }, bookmarkedArticles: { userBookmarks } }) => (
 <nav className="dashboard-nav">
    <NavLink to="/dashboard/posts" activeClassName="active-link">
      POSTS ({articleData.message ? 0 : articleData.totalCount})
    </NavLink>
    <NavLink to="/dashboard/bookmarks" activeClassName="active-link">
      BOOKMARKED ({userBookmarks.length})
    </NavLink>
  </nav>
);

TabNavBar.propTypes = {
  allUserArticles: PropTypes.object,
  bookmarkedArticles: PropTypes.object,
};

const mapStateToProps = state => ({
  allUserArticles: state.allUserArticles,
  bookmarkedArticles: state.bookmarkedArticles
});

export default connect(mapStateToProps)(TabNavBar);
