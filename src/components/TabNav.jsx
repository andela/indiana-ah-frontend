import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TabNavBar = ({
  allUserArticles: { articleData },
  bookmarkedArticles: { userBookmarks },
  UsersFollowedCount,
  followersCount
}) => (
    <nav className="dashboard-nav">
    <NavLink to="/dashboard/posts" activeClassName="active-link">
      POSTS ({articleData.message ? 0 : articleData.totalCount})
    </NavLink>
    <NavLink to="/dashboard/bookmarks" activeClassName="active-link">
      BOOKMARKED ({userBookmarks.length})
    </NavLink>
    <NavLink to="/dashboard/following" activeClassName="active-link">
     FOLLOWING ({UsersFollowedCount})
    </NavLink>
    <NavLink to="/dashboard/followers" activeClassName="active-link">
     FOLLOWERS ({followersCount})
    </NavLink>
  </nav>
);

TabNavBar.propTypes = {
  allUserArticles: PropTypes.object,
  bookmarkedArticles: PropTypes.object,
  UsersFollowedCount: PropTypes.number,
  followersCount: PropTypes.number,
};

const mapStateToProps = state => ({
  allUserArticles: state.allUserArticles,
  bookmarkedArticles: state.bookmarkedArticles,
  UsersFollowedCount: state.userFollow.UsersFollowedCount,
  followersCount: state.userFollow.followersCount,
});

export default connect(mapStateToProps)(TabNavBar);
