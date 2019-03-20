import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import SignupContainer from '../SignupFormContainer.jsx';
import Modal from './Modal.jsx';
import { ProfileImg, ImageLogo } from '../../styles/styledComponents/Navigation.jsx';
import {
  customLogo,
  searchIcon,
  notificationIcon,
  profile,
  dropDownIcon
} from '../../assets/images/svg';
import Button from '../../styles/styledComponents/Button.jsx';
import InputField from './input/InputComponent.jsx';
import { signOutUser } from '../../redux/actions/authActions';

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
        <div to="/signup" className="d-flex ft-size-2 ml-5
          align-items-center text-capitalize">
          {user.userData.username || user.userData.email}
          <img
            className="mx-3 d-none d-md-none d-lg-block d-xs-none"
            src={dropDownIcon}
            onClick={this.dropDown}
          />
          {this.state.dropDown && (
            <div className="dropDown-menu">
              <Link
                to="/"
                onClick={() => {
                  this.props.signOutUser();
                }}
              >
                Logout
              </Link>
            </div>
          )}
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
              <div>
                <h2>Login Form</h2>
              </div>
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
