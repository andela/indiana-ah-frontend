import React, { Component } from 'react';
import Modal from './common/Modal';
import Input from './common/Input';
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
        <button onClick={this.openModal}>Open Modal</button>
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