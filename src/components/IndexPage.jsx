import React, { Component } from 'react';
import Modal from './common/Modal.jsx';
import LoginContainer from './LoginFormContainer.jsx';

class IndexPage extends Component {
  state = {
    modalIsOpen: false,
    emailValue: '',
    passwordValue: '',
    openLoginForm: true,
    openRegisterForm: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }));
  };

  closeModal = () => {
    this.setState(() => ({ modalIsOpen: false }));
  };

  openRegisterForm = () => {
    this.setState({
      openRegisterForm: true,
      openLoginForm: false
    });
  };

  openLoginForm = () => {
    this.setState({
      openRegisterForm: false,
      openLoginForm: true
    });
  };

  render() {
    const { openLoginForm } = this.state;
    return (
      <div className="container">
        <h2>Welcome to Authors Haven!</h2>
        {/* This is how to use the modal */}
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          body={
            openLoginForm ? (
              <LoginContainer
                loginForm
                handleChange={this.handleChange}
                closeModal={this.closeModal}
                openLoginForm={this.openLoginForm}
                openRegisterForm={this.openRegisterForm}
                handleSubmit={this.handleSubmit}
              />
            ) : (
              <LoginContainer
                registerForm
                handleChange={this.handleChange}
                closeModal={this.closeModal}
                openLoginForm={this.openLoginForm}
                openRegisterForm={this.openRegisterForm}
                handleSubmit={this.handleSubmit}
              />
            )
          }
        />
      </div>
    );
  }
}

export default IndexPage;
