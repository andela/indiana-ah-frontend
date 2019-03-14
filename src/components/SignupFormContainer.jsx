import React, { Component } from 'react';
import { connect } from 'react-redux';
import SVG from 'react-inlinesvg';
import { Circle } from 'better-react-spinkit';
import { signUpFormSchema, validationMessages } from '../utils/validationSchemas';
import { registerWithEmail } from '../redux/actions/authActions';
import InputField from '../components/common/input/InputComponent';
import Button from '../styles/styledComponents/Button.jsx';

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
    const { registerWithEmail } = this.props;
    registerWithEmail(this.state.data, this.props);
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
      auth: { isLoading, error },
      displayForm
    } = this.props;
    return (
      <div className="signup-form-container">
        <div className="signup-form">
          <div className="fbButton align-button">
            <a href="https://indiana-ah-staging.herokuapp.com/auth/facebook">
              <SVG src="../src/assets/images/svg/facebook.svg" className="mx-5" />
              <span>Signup with facebook</span>
            </a>
          </div>
          <div className="ggButton align-button">
            <a href="https://indiana-ah-staging.herokuapp.com/auth/google">
              <SVG src="../src/assets/images/svg/google.svg" className="mx-5" />
              <span>Signup with google </span>
            </a>
          </div>
          <div className="ttButton align-button">
            <a href="https://indiana-ah-staging.herokuapp.com/auth/twitter">
              <SVG src="../src/assets/images/svg/twitter.svg" className="mx-5" />
              <span>Signup with twitter</span>
            </a>
          </div>
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
            <p className="d-flex justify-content-center">
              By signing up, you agree to our terms and condition
            </p>
            <div className="d-flex justify-content-center bg-light w-100 p-4 mt-3">
              Have an account?
              <a onClick={() => displayForm('login')} href="javascript:void(0)">
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

export default connect(
  mapStateToProps,
  { registerWithEmail }
)(SignupFormContainer);
