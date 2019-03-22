import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const TabNavBar = ({ allUserArticles: { articleData } }) => (
  <nav className="dashboard-nav">
    <NavLink to="/dashboard/posts" activeClassName="active-link">
      POSTS (
      {articleData.message ? 0 : articleData.articles ? articleData.totalCount : ''})
    </NavLink>
    <NavLink to="/dashboard/bookmarks" activeClassName="active-link">
      BOOKMARKED (0)
    </NavLink>
  </nav>
);

const mapStateToProps = state => ({
  allUserArticles: state.allUserArticles
});

export default connect(mapStateToProps)(TabNavBar);
