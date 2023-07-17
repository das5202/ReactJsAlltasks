// Modal.js
import React from 'react';
import ModalContainer from './ModalContainer';

const Modal = ({ children }) => {
  return (
    <ModalContainer>
      <div className="modal">{children}</div>
    </ModalContainer>
  );
};

export default Modal;
