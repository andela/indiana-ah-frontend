import React from 'react';
import { NavLink, Route } from 'react-router-dom';
// import './SideNav.css';
import SVG from 'react-inlinesvg';

const SideNav = () => (
  <div className="sidenav">
    <NavLink to="/profile" activeClassName="is-active" className="sidenav__logo-box">
      <SVG src="./src/images/icons/sideNavProfile.svg" alt="profile-logo" />
      <span className="sidenav__logo-label">Profile</span>
    </NavLink>
    <NavLink to="/articles" activeClassName="is-active" className="sidenav__logo-box">
      <SVG src="./src/images/icons/sideNavArticles.svg" />
      <span className="sidenav__logo-label">Articles</span>
    </NavLink>
    <NavLink to="/statistics" activeClassName="is-active" className="sidenav__logo-box">
      <SVG src="./src/images/icons/sideNavStatistics.svg" alt="profile-logo" />
      <span className="sidenav__logo-label">Statistics</span>
    </NavLink>
    <Route path="/" />
  </div>
);

export default SideNav;
