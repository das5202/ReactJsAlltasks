// ComponentA.js
import React, { useState } from 'react';
import { ModalProvider } from './ModalContext';
import Modal from './Modal';
import ComponentB from './ComponentB';

const ComponentA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalProvider>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal>
          <ComponentB closeModal={closeModal} />
        </Modal>
      )}
    </ModalProvider>
  );
};

export default ComponentA;
