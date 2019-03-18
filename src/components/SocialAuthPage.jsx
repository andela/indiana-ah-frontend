import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import socialMediaLogin from '../redux/actions/authActions';

export class SocialAuthPage extends Component {
  componentDidMount() {
    const { search } = window.location;
    const token = new URLSearchParams(search).get('token');
    this.props.socialMediaLogin(token);
    this.props.history.push('/');
  }

  /* eslint-disable class-methods-use-this */
  render() {
    return (
      <div>
        <p>We are verifying your account.....</p>
      </div>
    );
  }
}

SocialAuthPage.propTypes = {
  socialMediaLogin: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default connect(null, { socialMediaLogin })(withRouter(SocialAuthPage));
