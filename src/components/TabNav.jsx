import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TabNavBar = ({ allUserArticles: { articleData } }) => (
  <nav className="dashboard-nav">
    <NavLink to="/dashboard/posts" activeClassName="active-link">
      POSTS ({articleData.message ? 0 : articleData.totalCount})
    </NavLink>
    <NavLink to="/dashboard/bookmarks" activeClassName="active-link">
      BOOKMARKED (0)
    </NavLink>
  </nav>
);

TabNavBar.propTypes = {
  allUserArticles: PropTypes.object
};

const mapStateToProps = state => ({
  allUserArticles: state.allUserArticles
});

export default connect(mapStateToProps)(TabNavBar);
