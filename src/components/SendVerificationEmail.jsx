import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from '../styles/styledComponents/Button.jsx';
import { sendUserEmail } from '../redux/actions/authActions';

class SendVerificationEmail extends Component {
  render() {
    return (
      <div className="verify-account">
        <p>Click on the Button Below</p>
        <p>An Email will be sent to your account in order to verify your account</p>
        <a onClick={this.props.sendUserEmail}>
          <Button type="submit" bgColor margin={'auto'} height={'5rem'} sm>
            Verify your Account
          </Button>
        </a>
      </div>
    );
  }
}

SendVerificationEmail.propTypes = {
  sendUserEmail: PropTypes.func.isRequired
};
export default connect(
  null,
  { sendUserEmail }
)(SendVerificationEmail);
