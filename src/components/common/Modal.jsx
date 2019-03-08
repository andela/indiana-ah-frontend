import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const CustomModal = (props) => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.closeModal}
    contentLabel='Selected Modal'
    closeTimeoutMS={200}
    overlayClassName="Overlay"
    className="Modal"
  >
    <div ><span className="close" onClick={props.closeModal}> &times; </span></div>
    <div className="modal__body">
      {props.content && <p>{props.content}</p>}

    </div>
    
  </Modal>
);
export default CustomModal;