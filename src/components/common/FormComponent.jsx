/* eslint-disable no-nested-ternary */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import { FormContainer, FormTitle } from '../../styles/styledComponents/form.jsx';
import { TextArea } from './input/Input.jsx';
import InputField from './input/InputComponent.jsx';
import Button from '../../styles/styledComponents/Button.jsx';

const Form = ({
  registerForm,
  loginForm,
  reportForm,
  resetPasswordForm,
  reportTitleValue,
  emailValue,
  handleChange,
  usernameValue,
  passwordValue,
  handleSubmit
}) => (
  <FormContainer className="d-flex flex-column align-items-center pt-4">
    {registerForm || loginForm ? (
      <Fragment>
        <Button fbSocial className="d-flex justify-content-around">
          <SVG src="../src/assets/images/svg/facebook.svg" />
          {registerForm ? 'Signup with facebook' : 'Continue with facebook'}
        </Button>
        <Button ggSocial className="d-flex justify-content-around">
          <SVG src="../src/assets/images/svg/google.svg" />
          {registerForm ? 'Signup with google' : 'Continue with google'}
        </Button>
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
        <InputField
          className="my-3"
          id={reportForm ? 'reportTitle' : 'emailValue'}
          width={resetPasswordForm ? '70%' : '80%'}
          placeholder={reportForm ? 'report title' : 'email'}
          type="text"
          name={reportForm ? 'reportTitle' : 'emailValue'}
          value={reportForm ? reportTitleValue : emailValue}
          noMargin
          onChange={handleChange}
        />
      </div>
    ) : (
      <Fragment />
    )}

    <div className="w-100 px-1">
      {reportForm ? (
        <TextArea
          className="my-3"
          width={'80%'}
          rows="10"
          placeholder="report description"
          type="text"
          noMargin
        />
      ) : registerForm || loginForm ? (
        <InputField
          className="my-3"
          width={'80%'}
          id={registerForm ? 'username' : 'password'}
          placeholder={registerForm ? 'username' : 'password'}
          onChange={handleChange}
          name={registerForm ? 'username' : 'passwordValue'}
          value={registerForm ? usernameValue : passwordValue}
          type="text"
          noMargin
        />
      ) : (
        <Fragment />
      )}
    </div>
    {registerForm ? (
      <InputField
        className="my-3"
        width={'80%'}
        placeholder="password"
        type="text"
        noMargin
      />
    ) : (
      <Fragment />
    )}

    {registerForm ? (
      <Button>signup</Button>
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
        Dont have an account? <a href="/">Create one</a>
      </p>
    ) : resetPasswordForm ? (
      <p>By signing up, you agree to our terms and condition</p>
    ) : (
      <Fragment />
    )}

    {registerForm || loginForm || resetPasswordForm ? (
      <Fragment>
        {resetPasswordForm ? (
          <div className="bg-light w-100 p-3 mt-3">Never mind</div>
        ) : loginForm ? (
          <div className="bg-light w-100 p-3 mt-3">
            <a href="/">Forgot password?</a>
          </div>
        ) : registerForm ? (
          <div className="bg-light w-100 p-4 mt-3">
            Have an account? <a href="/">Login</a>
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
  registerForm: PropTypes.string,
  loginForm: PropTypes.string,
  reportForm: PropTypes.string,
  resetPasswordForm: PropTypes.string,
  reportTitleValue: PropTypes.string,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  usernameValue: PropTypes.string
};
export default Form;
