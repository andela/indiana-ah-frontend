import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Circle } from 'better-react-spinkit';
import { withRouter } from 'react-router-dom';
import { loginWithEmail } from '../redux/actions/authActions';
import InputField from './common/input/InputComponent.jsx';
import Button from '../styles/styledComponents/Button.jsx';
import { facebook, twitter, google } from '../assets/images/svg';

export class LoginFormContainer extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    error: ''
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.loginWithEmail(this.state.data, this.props);
    const { error } = this.props.auth;
    this.setState({ error });
  };

  handleChange = ({ target: input }) => {
    const data = { ...this.state.data };
    const field = input.id;
    data[field] = input.value;
    this.setState({ data });
  };

  render() {
    const {
      data: { password, email },
      error
    } = this.state;
    const {
      auth: { isLoading },
      displayForm
    } = this.props;
    return (
      <div className="signup-form-container">
        {error && <div className="text-danger text-center">{error}</div>}
        <div className="signup-form">
          <div className="fbButton align-button">
            <a href="https://indiana-ah-staging.herokuapp.com/auth/facebook">
              <img src={facebook} className="mx-5 facebook" />
              <span>Login with facebook</span>
            </a>
          </div>
          <div className="ggButton align-button">
            <a href="https://indiana-ah-staging.herokuapp.com/auth/google">
              <img src={google} className="mx-5 google" />
              <span>Login with google </span>
            </a>
          </div>
          <div className="ttButton align-button">
            <a href="https://indiana-ah-staging.herokuapp.com/auth/twitter">
              <img src={twitter} className="mx-5 twitter" />
              <span>Login with twitter</span>
            </a>
          </div>
          <h3 className="text-center mt-5">OR</h3>
          <form onSubmit={this.handleSubmit}>
            <InputField
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              handleChange={this.handleChange}
            />
            <InputField
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              handleChange={this.handleChange}
            />
            <Button type="submit" disabled={isLoading}>
              login
              {isLoading && (
                <span style={{ float: 'right', padding: '3px 3px 0 10px' }}>
                  <Circle color={'#0b41cd'} />
                </span>
              )}
            </Button>
            <p className="d-flex justify-content-center">
              Dont have an account?{' '}
              <a href="#" onClick={() => displayForm('register')}>
                Create one
              </a>
            </p>
            <div className="d-flex justify-content-center bg-light w-100 p-4 mt-3">
              <a href="#">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginWithEmail }
)(withRouter(LoginFormContainer));

LoginFormContainer.propTypes = {
  auth: PropTypes.object,
  displayForm: PropTypes.func,
  loginWithEmail: PropTypes.func
};
