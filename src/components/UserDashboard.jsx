import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserArticlesPage from './UserArticlesPage.jsx';
import SideNav from './SideNav.jsx';
import TabNav from './TabNav.jsx';

const UserDashboard = () => (
  <div className="user-dashboard">
    <SideNav className="side-nav" />
    <div className="dashboard-column">
      <TabNav className="tab-nav" />
      <Switch>
        <Route path="/dashboard/posts" component={UserArticlesPage} />
        <Route
          path="/dashboard/bookmarks"
          component={() => <h1>You presently do not have any bookmarked articles</h1>}
        />
      </Switch>
    </div>
  </div>
);

export default UserDashboard;
