import React, { Fragment } from 'react';
import {
  Navbar, Nav, Form, FormControl
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProfileImg, ImageLogo } from '../../styles/styledComponents/Navigation.jsx';

const Bnav = () => (
  <Fragment>
    <Navbar bg="white shadow-sm" expand="lg">
      <Navbar.Brand href="#home">
        <ImageLogo>
          <Link to="/">
            {/* eslint-disable-next-line global-require */}
            <img src={require('../../img/logo2.svg')} alt="logo" />
          </Link>
        </ImageLogo>
      </Navbar.Brand>
      <img
        className="notification-logo ml-auto mr-3 d-none d-sm-block"
        src={require('../../img/notificationIcon.svg')}
        alt="logo"
      />
      <Nav.Link to="/signup" className="mr-3 d-none d-md-block">
        Samantha
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 search"
              style={{ minWidth: '300px' }}
            />
          </Form>
        </Nav>
        <Nav>
          <img
            className="ml-auto d-none d-md-none d-lg-block d-xs-none"
            src={require('../../img/notificationIcon.svg')}
            alt="logo"
          />
          <ProfileImg
            src={require('../../img/profile.jpg')}
            className="ml-5 mt-2 d-none d-md-none d-xs-none d-lg-block"
            alt="logo"
          />
          <Nav.Link to="/signup" className="ft-size-2 ml-5">
            Samantha
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    ;
  </Fragment>
);
export default Bnav;
