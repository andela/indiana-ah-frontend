/* eslint-disable no-nested-ternary */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import { Circle } from 'better-react-spinkit';
import { FormContainer, FormTitle } from '../../styles/styledComponents/form.jsx';
import { TextArea } from './input/Input.jsx';
import InputField from './input/InputComponent.jsx';
import Button from '../../styles/styledComponents/Button.jsx';

const Form = ({
  registerForm,
  openLoginForm,
  openRegisterForm,
  loginForm,
  reportForm,
  resetPasswordForm,
  reportTitleValue,
  emailValue,
  handleChange,
  usernameValue,
  passwordValue,
  handleSubmit,
  handleBlur,
  isLoading,
  responseErrorMessage,
  errors
}) => (
  <FormContainer className="d-flex flex-column align-items-center pt-4">
    {registerForm || loginForm ? (
      <Fragment>
        <div className="fbButton">
          <a href="https://indiana-ah-staging.herokuapp.com/auth/facebook">
            <SVG src="../src/assets/images/svg/facebook.svg" className="mx-5" />
            <span>
              {registerForm ? 'Signup with facebook' : 'Continue with facebook'}
            </span>
          </a>
        </div>
        <div className="ggButton">
          <a href="https://indiana-ah-staging.herokuapp.com/auth/google">
            <SVG src="../src/assets/images/svg/google.svg" className="mx-5" />
            <span>{registerForm ? 'Signup with google' : 'Continue with google'}</span>
          </a>
        </div>
        <div className="ttButton">
          <a href="https://indiana-ah-staging.herokuapp.com/auth/twitter">
            <SVG src="../src/assets/images/svg/twitter.svg" className="mx-5" />
            <span>{registerForm ? 'Signup with twitter' : 'Continue with twitter'}</span>
          </a>
        </div>
      </Fragment>
    ) : reportForm ? (
      <FormTitle>report article</FormTitle>
    ) : resetPasswordForm ? (
      <FormTitle>reset password</FormTitle>
    ) : (
      <Fragment />
    )}
    {resetPasswordForm || reportForm || loginForm || registerForm ? (
      <div className="w-100 px-1">
        {resetPasswordForm ? (
          <SVG className="formIcon" src="../src/assets/images/svg/emailIcon.svg" />
        ) : (
          <Fragment />
        )}
        <span className="text-danger">{responseErrorMessage}</span>
        <InputField
          className="my-3"
          id={reportForm ? 'reportTitle' : 'email'}
          width={resetPasswordForm ? '80%' : '100%'}
          placeholder={reportForm ? 'report title' : 'email'}
          type={reportForm ? 'text' : 'email'}
          name={reportForm ? 'reportTitle' : 'emailValue'}
          value={reportForm ? reportTitleValue : emailValue}
          noMargin
          handleChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors ? errors.email : ''}
        />
      </div>
    ) : (
      <Fragment />
    )}

    <div className="w-100 px-1">
      {reportForm ? (
        <TextArea
          className="my-3"
          width={'100%'}
          rows="10"
          placeholder="report description"
          type="text"
          noMargin
        />
      ) : registerForm || loginForm ? (
        <InputField
          className="my-3"
          width={'100%'}
          id={registerForm ? 'username' : 'password'}
          placeholder={registerForm ? 'username' : 'password'}
          handleChange={handleChange}
          onBlur={handleBlur}
          name={registerForm ? 'username' : 'passwordValue'}
          value={registerForm ? usernameValue : passwordValue}
          errorMessage={errors ? errors.username : ''}
          type="text"
          noMargin
        />
      ) : (
        <Fragment />
      )}
    </div>
    <div className="w-100 px-1">
      {registerForm ? (
        <InputField
          className="my-3"
          width={'100%'}
          placeholder="password"
          type="password"
          id="password"
          noMargin
          onBlur={handleBlur}
          handleChange={handleChange}
          value={passwordValue}
          errorMessage={errors ? errors.password : ''}
        />
      ) : (
        <Fragment />
      )}
    </div>

    {registerForm ? (
      <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
        signup{' '}
        {isLoading && (
          <span style={{ float: 'right', padding: '3px 3px 0 10px' }}>
            <Circle color={'#0b41cd'} />
          </span>
        )}
      </Button>
    ) : loginForm ? (
      <Button onClick={handleSubmit}>login</Button>
    ) : reportForm ? (
      <Button danger className="mb-5">
        report
      </Button>
    ) : resetPasswordForm ? (
      <Button>reset password</Button>
    ) : (
      <div />
    )}

    {registerForm ? (
      <p>By signing up, you agree to our terms and condition</p>
    ) : loginForm ? (
      <p>
        Dont have an account?{' '}
        <a href="#" onClick={openRegisterForm}>
          Create one
        </a>
      </p>
    ) : resetPasswordForm ? (
      <p>By signing up, you agree to our terms and condition</p>
    ) : (
      <Fragment />
    )}

    {registerForm || loginForm || resetPasswordForm ? (
      <Fragment>
        {resetPasswordForm ? (
          <div className="d-flex justify-content-center bg-light w-100 p-3 mt-3">
            Never mind
          </div>
        ) : loginForm ? (
          <div className="d-flex justify-content-center bg-light w-100 p-3 mt-3">
            <a href="#">Forgot password?</a>
          </div>
        ) : registerForm ? (
          <div className="d-flex justify-content-center bg-light w-100 p-4 mt-3">
            Have an account?
            <a href="#" onClick={openLoginForm}>
              Login
            </a>
          </div>
        ) : (
          <Fragment />
        )}
      </Fragment>
    ) : (
      <div />
    )}
  </FormContainer>
);
Form.propTypes = {
  registerForm: PropTypes.boolean,
  loginForm: PropTypes.boolean,
  reportForm: PropTypes.string,
  resetPasswordForm: PropTypes.string,
  reportTitleValue: PropTypes.string,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  usernameValue: PropTypes.string,
  errors: PropTypes.object,
  isLoading: PropTypes.boolean,
  responseErrorMessage: PropTypes.string,
  openLoginForm: PropTypes.boolean,
  openRegisterForm: PropTypes.boolean
};
export default Form;
