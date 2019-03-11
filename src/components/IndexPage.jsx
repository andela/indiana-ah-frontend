import React, { Component } from 'react';

class IndexPage extends Component {
  state = {
    name: 'Indiana'
  };

  render() {
    return (
      <div className="container">
        <h2>Welcome to Author's Haven! {this.state.name}</h2>
      </div>
    );
  }
}

export default IndexPage;
