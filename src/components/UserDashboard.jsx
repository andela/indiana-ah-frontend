import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserArticlesPage from './UserArticlesPage.jsx';
import SideNav from './SideNav.jsx';
import TabNav from './TabNav.jsx';
import UserBookmarkedArticlesPage from './UserBookmarkedArticlesPage.jsx';

const UserDashboard = () => (
  <div className="user-dashboard">
    <SideNav className="side-nav" />
    <div className="dashboard-column">
      <TabNav className="tab-nav" />
      <Switch>
        <Route path="/dashboard/posts" component={UserArticlesPage} />
        <Route path="/dashboard/bookmarks" component={UserBookmarkedArticlesPage} />
      </Switch>
    </div>
  </div>
);

export default UserDashboard;
