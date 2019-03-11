import React, { Component } from 'react';

class IndexPage extends Component {
  state = {
    // Just to remove eslint errors
  };

  render() {
    return (
      <div className="container">
        <h2>Welcome to Author's Haven!{ this.state }</h2>
      </div>
    );
  }
}

export default IndexPage;
