import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { ProfileImg, ImageLogo } from '../../styles/styledComponents/Navigation.jsx';
import {
  customLogo,
  searchIcon,
  notificationIcon,
  profile,
  dropDownIcon
} from '../../assets/images/svg';
import InputField from './input/InputComponent.jsx';

const NavBar = () => (
  <Fragment>
    <Navbar bg="white shadow-sm px-5" expand="lg">
      <Navbar.Brand href="#home">
        <ImageLogo>
          <Link to="/">
            <img src={customLogo} className="feather" />
          </Link>
        </ImageLogo>
      </Navbar.Brand>
      <Nav.Link to="/signup" className="mr-3 d-none d-sm-block d-lg-none d-md-none">
        Samantha
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-5">
          <InputField
            type="text"
            id="search"
            value=""
            placeholder="search"
            handleChange={() => {}}
            width="38rem"
          />
          <img className="search-logo" src={searchIcon} />
        </Nav>
        <Nav>
          <img
            className="ml-auto d-none d-md-none d-xs-none d-lg-block"
            src={notificationIcon}
          />
          <ProfileImg
            src={profile}
            className="ml-5 mt-2 d-none d-md-none d-xs-none d-lg-block"
            alt="logo"
          />
          <Nav.Link to="/signup" className="d-flex ft-size-2 ml-5">
            Samantha
            <img
              className="mx-3 d-none d-md-none d-lg-block d-xs-none"
              src={dropDownIcon}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    ;
  </Fragment>
);
export default NavBar;
