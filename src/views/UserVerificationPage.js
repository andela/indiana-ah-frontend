import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyUser } from '../redux/actions/authActions';

class VerifyUser extends Component {
  componentDidMount() {
    const { history, verifyUser } = this.props;
    const urlSearchParams = new URLSearchParams(location.search);
    const query = urlSearchParams.get('query');
    verifyUser(history, query);
  }

  render() {
    return <div>Verifying User Your Email</div>;
  }
}

export default connect(
  null,
  { verifyUser }
)(VerifyUser);
