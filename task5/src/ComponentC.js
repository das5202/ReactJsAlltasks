// ComponentC.js
import React, { useContext } from 'react';
import { ModalContext } from './ModalContext';

const ComponentC = () => {
  const { images, currentImageIndex, setCurrentImageIndex } = useContext(
    ModalContext
  );

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <img src={images[currentImageIndex].url} alt="Slider" />
      <p>{images[currentImageIndex].description}</p>
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ComponentC;
