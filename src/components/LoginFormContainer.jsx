import React, { Component } from 'react';
import Form from './common/FormComponent.jsx';

class LoginContainer extends Component {
  state = {
    data: {
      emailValue: '',
      passwordValue: ''
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('>>>>>>>state', this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      data: { passwordValue, emailValue }
    } = this.state;
    return (
      <Form
        loginForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        emailValue={emailValue}
        passwordValue={passwordValue}
      />
    );
  }
}

export default LoginContainer;
