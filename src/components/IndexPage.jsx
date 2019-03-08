import React, { Component } from 'react';

import FormModal from './common/FormModal';

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
        <FormModal  
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
} 

export default IndexPage;