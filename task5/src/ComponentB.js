// ComponentB.js
import React from 'react';
import ComponentC from './ComponentC';

const ComponentB = ({ closeModal }) => {
  return (
    <div>
      <h2>Modal Content</h2>
      <p> the content of modal </p>
      <button onClick={closeModal}>Close Modal</button>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
