import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import SignupContainer from '../SignupFormContainer.jsx';
import LoginContainer from '../LoginFormContainer.jsx';
import ResetContainer from '../ResetFormContainer.jsx';
import Modal from './Modal.jsx';
import { ProfileImg, ImageLogo } from '../../styles/styledComponents/Navigation.jsx';
import { customLogo } from '../../assets/images/svg';
import Button from '../../styles/styledComponents/Button.jsx';
import { signOutUser } from '../../redux/actions/authActions';
import Dropdown from '../Dropdown.jsx';
import SearchBar from './SearchBar.jsx';

export class NavBar extends Component {
  state = {
    dropDown: false,
    modalIsOpen: false,
    modalContent: ''
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
    const { modalContent } = this.state;
    const userLInk = (
      <Nav className="d-flex flex-row justify-content-between">
        <ProfileImg
          src={user.userData.profileImage || user.userData.imageUrl}
          className="ml-5 mt-2"
          alt="logo"
        />
        <div to="/signup" className="d-flex ft-size-2 ml-5">
          <span className="username ml-3">
            {(user.userData.name ? user.userData.name.split(' ')[0] : '')
              || user.userData.username}
          </span>
          <span style={{ padding: '0 0.3em' }} />
          <Dropdown signOutUser={this.props.signOutUser} />
        </div>
      </Nav>
    );
    const form = () => {
      if (modalContent === 'login') {
        return <LoginContainer
          displayForm={this.displayForm}
          closeModal={this.closeModal}
        />;
      } if (modalContent === 'register') {
        return <SignupContainer
          displayForm={this.displayForm}
          closeModal={this.closeModal}
        />;
      } if (modalContent === 'reset') {
        return <ResetContainer
          displayForm={this.displayForm}
          closeModal={this.closeModal}
        />;
      }
      return null;
    };
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
              <SearchBar />
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
          body={form()}
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
