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
  registerWithSm: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default connect(null, { registerWithSm })(withRouter(SocialAuthPage));
