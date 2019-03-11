import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved
import Modal from './common/Modal';
// eslint-disable-next-line import/no-unresolved
import Input from './common/Input';
// eslint-disable-next-line import/no-unresolved
import Button from '../styles/styledComponents/Button';

class IndexPage extends Component {
  state = {
    modalIsOpen: false
  };

  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }));
  }

  closeModal = () => {
    this.setState(() => ({ modalIsOpen: false }));
  }

  render() {
    const form = (
      <form>
        <Input
          type="text"
          id="username"
          value=""
          placeholder="Enter your username"
        />

        <Input
          type="text"
          id="email"
          value=""
          placeholder="Enter your email"
          errorMessage="This is wrong"
        />
        <Input
          type="password"
          id="password"
          value=""
          placeholder="Enter your password"
        />
      </form>
    );
    return (
      <div className="container">
        <h2>Welcome to Author's Haven!</h2>

        {/* This is how to use the modal */}
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          body={form}
        >
        </Modal>
      </div>
    );
  }
}

export default IndexPage;
