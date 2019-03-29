import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserArticlesPage from './UserArticlesPage.jsx';
import UserBookmarkPage from './UserBookmarksPage.jsx';
import SideNav from './SideNav.jsx';
import TabNav from './TabNav.jsx';
import Footer from './common/footer.jsx';

const UserDashboard = () => (
<Fragment>
  <div className="user-dashboard">
    <SideNav className="side-nav" />
    <div className="dashboard-column">
      <TabNav className="tab-nav" />
      <Switch>
        <Route path="/dashboard/posts" component={UserArticlesPage} />
        <Route path="/dashboard/bookmarks" component={UserBookmarkPage} />
      </Switch>
    </div>
  </div>
  <Footer />
  </Fragment>
);

export default UserDashboard;
