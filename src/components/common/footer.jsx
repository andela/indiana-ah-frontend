import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import SVG from 'react-inlinesvg';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <Row>
        <Col
          className="col-lg-4 col-md-5 col-sm-4 col-3
          d-none d-sm-block pl-0 align-self-center">
          <div className="d-flex">
            <SVG src="../src/assets/images/svg/logo2.svg" className="feather" />
            <SVG src="../src/assets/images/svg/logo.svg" className="d-block app-logo" />
          </div>
        </Col>
        <Col className="d-flex align-items-center flex-column">
          <h2 className="mb-5">Help</h2>
          <Link to="#">
            <h4 className="mb-4">Profile</h4>
          </Link>
          <Link to="#">
            <h4>Blog</h4>
          </Link>
        </Col>
        <Col className="d-flex align-items-center flex-column">
          <h2 className="mb-5">Contact Us</h2>
          <Link to="#">
            <h4 className="mb-4">Faqs</h4>
          </Link>
          <Link to="#">
            <h4>Contact us</h4>
          </Link>
        </Col>
        <Col className="d-flex align-items-center flex-column">
          <h2 className="mb-4">Social Media</h2>
          <div className="d-flex justify-evenly w-75 mb-4">
            <Link to="#">
              <SVG
                src="../src/assets/images/svg/facebook.svg"
                className="mr-5 d-block logo2"
              />
            </Link>
            <Link to="#">
              <SVG src="../src/assets/images/svg/twitter.svg" className="d-block logo2" />
            </Link>
          </div>
          <div className="d-flex justify-content-between w-75">
            <Link to="#">
              <h4>Facebook</h4>
            </Link>
            <Link to="#">
              <h4>Twitter</h4>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default Footer;
