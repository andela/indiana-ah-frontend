import React from 'react';

import Button from '../styles/styledComponents/Button.jsx';

const VerifyUserPage = () => (
  <div className="verify-account">
    <p>Click on the Button Below</p>
    <p>An Email will be sent to your account in order to verify your account</p>
    <a href="">
      <Button
        type="submit"
        bgColor
        margin={'auto'}
        height={'5rem'}
        sm
      >
        Verify your Account
      </Button>
    </a>
  </div>
);

export default VerifyUserPage;
