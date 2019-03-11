import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const CustomModal = props => (
  <Modal
    show={ props.modalIsOpen }
    onHide={props.closeModal}
    dialogClassName="Modal"
  >
    <Modal.Body>
      {props.body}
    </Modal.Body>

  </Modal>
);

CustomModal.propTypes = {
  body: PropTypes.string,
  modalIsOpen: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default CustomModal;
