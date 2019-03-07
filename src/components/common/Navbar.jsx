import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import {
  Header,
  Nav,
  Ul,
  Li,
  ImageLogo
} from '../../styles/styledComponents/Navigation.jsx';

const NavBar = () => (
  <Header>
    <div className="container-fluid px-5">
      <Row className="d-flex">
        <Col md={4} className="mt-1">
          <ImageLogo>
            <Link to="/">
              {/* eslint-disable-next-line global-require */}
              <img src={require('../../img/logo2.svg')} alt="logo" />
            </Link>
          </ImageLogo>
        </Col>
        <Col md={8} className="mt-4 d-flex flex-row justify-content-between">
          <Col md={6}>Input</Col>
          <Col md={6}>
            <Nav className="d-flex flex-row justify-content-between">
              <img
                className="mr-5"
                src={require('../../img/notificationIcon.svg')}
                alt="logo"
              />
              <img
                className="mr-5 rounded-circle"
                src={require('../../img/profile.jpg')}
                alt="logo"
              />
              <Ul>
                <Li>
                  <Link to="/signup">Samantha</Link>
                </Li>
              </Ul>
            </Nav>
          </Col>
        </Col>
      </Row>
    </div>
  </Header>
);
export default NavBar;
