import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, InputGroup, FormControl
} from 'react-bootstrap';
import SignupContainer from '../SignupFormContainer.jsx';
import LoginContainer from '../LoginFormContainer.jsx';
import Modal from './Modal.jsx';
import { ProfileImg, ImageLogo } from '../../styles/styledComponents/Navigation.jsx';
import { customLogo, notificationIcon, profile } from '../../assets/images/svg';
import Button from '../../styles/styledComponents/Button.jsx';
import { signOutUser } from '../../redux/actions/authActions';
import Dropdown from '../Dropdown.jsx';

export class NavBar extends Component {
  state = {
    dropDown: false,
    modalIsOpen: false
  };

  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }));
  };

  closeModal = () => {
    const {
      auth: { isLoading }
    } = this.props;
    if (!isLoading) this.setState(() => ({ modalIsOpen: false }));
  };

  displayForm = (form) => {
    this.setState({ modalIsOpen: true, modalContent: form });
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.closeDropDown);
  }

  dropDown = (event) => {
    event.preventDefault();

    this.setState({ dropDown: true }, () => {
      document.addEventListener('click', this.closeDropDown);
    });
  };

  closeDropDown = () => {
    this.setState({ dropDown: false }, () => {
      document.removeEventListener('click', this.closeDropDown);
    });
  };

  render() {
    const { user, auth } = this.props;
    const userLInk = (
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
        <div to="/signup" className="d-flex ft-size-2 ml-5">
          <span className="username">
            {' '}
            {user.userData.name || user.userData.username}
          </span>
          <span style={{ padding: '0 0.3em' }} />
          <Dropdown signOutUser={this.props.signOutUser} />
        </div>
      </Nav>
    );
    return (
      <Fragment>
        <Navbar bg="white shadow-sm px-5" expand="lg">
          <Navbar.Brand>
            <Link to="/">
              <ImageLogo>
                <img src={customLogo} className="feather" />
              </ImageLogo>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-5">
              <InputGroup className="mb-3">
                <FormControl placeholder="Search" aria-describedby="basic-addon2" />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">
                    <i className="fa fa-search" />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Nav>
            {auth.isAuthenticated ? (
              userLInk
            ) : (
              <Button onClick={() => this.displayForm('login')} className="ml-auto" sm>
                Login
              </Button>
            )}
          </Navbar.Collapse>
        </Navbar>
        <Modal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          body={
            this.state.modalContent === 'login' ? (
              <LoginContainer
                displayForm={this.displayForm}
                closeModal={this.closeModal}
              />
            ) : (
              <SignupContainer
                displayForm={this.displayForm}
                closeModal={this.closeModal}
              />
            )
          }
        />
      </Fragment>
    );
  }
}

NavBar.propTypes = {
  user: PropTypes.object,
  signOutUser: PropTypes.func,
  auth: PropTypes.object
};

export const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signOutUser }
)(NavBar);
