import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Circle } from 'better-react-spinkit';
import { signUpFormSchema, validationMessages } from '../utils/validationSchemas';
import { registerWithEmail } from '../redux/actions/authActions';
import InputField from './common/input/InputComponent.jsx';
import Button from '../styles/styledComponents/Button.jsx';
import { facebook, twitter, google } from '../assets/images/svg';

export class SignupFormContainer extends Component {
  state = {
    data: {
      email: '',
      username: '',
      password: ''
    },
    errors: {}
  };

  componentDidUpdate(prevProps) {
    if (prevProps.auth.error === this.props.auth.error) return;
    const { error } = this.props.auth;
    const errors = { ...this.state.errors };

    if (error.match(/username/)) errors.username = error;
    if (error.match(/email/)) errors.email = error;
    this.setState({ errors });
  }

  validate = () => {
    const { errors } = this.state;
    let isValid = true;
    Object.values(errors).forEach((error) => {
      if (error) {
        isValid = false;
      }
    });
    return isValid;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.validate()) {
      return;
    }
    this.props.registerWithEmail(this.state.data, this.props);
  };

  handleChange = ({ target: input }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const field = input.id;
    data[field] = input.value;
    errors[field] = '';
    this.setState({ data, errors });
  };

  handleBlur = ({ target: input }) => {
    const data = { ...this.state.data };
    const errors = { ...this.state.errors };
    const field = input.id;

    if (!signUpFormSchema[field].test(data[field])) {
      errors[field] = validationMessages[field];
    }

    if (!data[field]) errors[field] = `${field} is required`;

    this.setState({ errors });
  };

  render() {
    const {
      data: { username, password, email },
      errors
    } = this.state;
    const {
      auth: { isLoading },
      displayForm
    } = this.props;
    return (
      <div className="signup-form-container">
        <div className="signup-form">
          <div className="fbButton align-button">
            <a href="https://indiana-ah-staging.herokuapp.com/auth/facebook">
              <img src={facebook} className="mx-5 facebook" />
              <span>Signup with facebook</span>
            </a>
          </div>
          <div className="ggButton align-button">
            <a href="https://indiana-ah-staging.herokuapp.com/auth/google">
              <img src={google} className="mx-5 google" />
              <span>Signup with google </span>
            </a>
          </div>
          <div className="ttButton align-button">
            <a href="https://indiana-ah-staging.herokuapp.com/auth/twitter">
              <img src={twitter} className="mx-5 twitter" />
              <span>Signup with twitter</span>
            </a>
          </div>
          <h3 className="text-center mt-5">OR</h3>
          <form onSubmit={this.handleSubmit}>
            <InputField
              placeholder="Username"
              type="text"
              id="username"
              value={username}
              errorMessage={errors.username}
              handleChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <InputField
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              errorMessage={errors.email}
              handleChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <InputField
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              errorMessage={errors.password}
              handleChange={this.handleChange}
              onBlur={this.handleBlur}
            />
            <Button type="submit" disabled={isLoading}>
              sign up
              {isLoading && (
                <span style={{ float: 'right', padding: '3px 3px 0 10px' }}>
                  <Circle color={'#0b41cd'} />
                </span>
              )}
            </Button>
            <p>By signing up, you agree to our terms and condition</p>
            <div className="d-flex justify-content-center bg-light w-100 p-4 mt-3">
              Have an account?
              <a onClick={() => displayForm('login')} href="#">
                Login
              </a>
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

SignupFormContainer.propTypes = {
  auth: PropTypes.object.isRequired,
  displayForm: PropTypes.func.isRequired,
  registerWithEmail: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { registerWithEmail }
)(withRouter(SignupFormContainer));
