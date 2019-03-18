/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerWithSm } from '../redux/actions/authActions';

class SocialAuthPage extends Component {
  componentDidMount() {
    const { search } = window.location;
    const token = new URLSearchParams(search).get('token');
    this.props.registerWithSm(token);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <p>We are verifying your account.....</p>
      </div>
    );
  }
}

SocialAuthPage.propTypes = {
  registerWithSm: PropTypes.func.isRequired
};

export default connect(
  null,
  { registerWithSm }
)(withRouter(SocialAuthPage));
