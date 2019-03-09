import React from 'react';
//import Modal from 'react-modal';
import {Modal, InputGroup, FormControl} from 'react-bootstrap';

//Modal.setAppElement('#root');
const CustomModal = (props) => (
  <Modal
    show={props.modalIsOpen}
    onHide={props.closeModal}
    dialogClassName="Modal"
  >
    <Modal.Body>
      {props.body}
    </Modal.Body>
    
  </Modal>
);
export default CustomModal;