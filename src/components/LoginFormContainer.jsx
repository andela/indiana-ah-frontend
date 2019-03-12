import React, { Component } from 'react';
import Form from './common/FormComponent.jsx';

class LoginContainer extends Component {
  state = {
    emailValue: '',
    passwordValue: '',
    usernameValue: ''
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('>>>state', this.state);
  };

  render() {
    return (
      <Form
        loginForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        emailValue={this.state.emailValue}
        usernameValue={this.state.usernameValue}
        passwordValue={this.state.passwordValue}
      />
    );
  }
}
export default LoginContainer;
