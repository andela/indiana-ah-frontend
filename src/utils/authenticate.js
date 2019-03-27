import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';

export default function (ComposedComponent) {
  class Authenticate extends Component {
    componentDidMount() {
      const { isAuthenticated, isVerified } = this.props.auth;
      if (!isAuthenticated) {
        toast.error('You need to Login/Register to access this page');
        this.context.router.history.push('/');
        return;
      }
      if (!isVerified) {
        toast.error('You need to verify your account to access this page');
        this.context.router.history.push('/user/verify');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authenticate.propTypes = {
    auth: PropTypes.object.isRequired
  };
  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });
  return connect(mapStateToProps)(Authenticate);
}
