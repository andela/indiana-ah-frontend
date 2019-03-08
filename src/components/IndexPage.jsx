import React, { Component } from 'react';

import Modal from './common/Modal';

class IndexPage extends Component {

  state = {
    modalIsOpen: false
  };
  openModal = () => {
    this.setState(() => ({ modalIsOpen: true}));
  }
  closeModal = () => {
    this.setState(() => ({ modalIsOpen: false}) );
  }
  
  render() {
    return (
      <div className="container">
        <h2>Welcome to Author's Haven!</h2>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal  
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
} 

export default IndexPage;