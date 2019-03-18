import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import UserArticles from './UserArticles.jsx';

const TabsComponent = () => (
  <div className="tabs">
    <Tabs defaultActiveKey="POSTS" id="uncontrolled-tab-example">
      <Tab eventKey="POSTS" title="POSTS (23)">
        <UserArticles />
      </Tab>
      <Tab eventKey="BOOKMARKED" title="BOOKMRKED (30)">
        <h1>See this foool oooo</h1>
      </Tab>
      <Tab eventKey="FOLLOWING" title="FOLLOWING">
        <p> kakakakakakaka </p>
      </Tab>
    </Tabs>
  </div>
);

export default TabsComponent;
