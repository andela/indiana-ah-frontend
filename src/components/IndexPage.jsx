import React, { Component } from 'react';
import Modal from './common/Modal.jsx';
import LoginContainer from './LoginFormContainer.jsx';

class IndexPage extends Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }));
  };

  closeModal = () => {
    this.setState(() => ({ modalIsOpen: false }));
  };

  render() {
    return (
      <div className="container">
        <h2>Welcome to Authors Haven!</h2>
        {/* This is how to use the modal */}
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          body={<LoginContainer closeModal={this.closeModal} />}
        />
      </div>
    );
  }
}

export default IndexPage;
