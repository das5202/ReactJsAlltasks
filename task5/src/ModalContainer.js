// ModalContainer.js
import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

const ModalContainer = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">{children}</div>,
    modalRoot
  );
};

export default ModalContainer;
