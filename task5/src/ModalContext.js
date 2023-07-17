// ModalContext.js
import React, { useState } from 'react';

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: 'https://www.shutterstock.com/image-photo/closeup-portrait-young-professional-beautiful-260nw-220418767.jpg',
      description: 'showing image 1',
    },
    {
      url: 'https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=xQsoWWZXJ1ydmmCGgnHyuVYUc7BILG1FauoHcloDnG4=',
      description: 'showing image 2',
    },
    
  ];

  return (
    <ModalContext.Provider
      value={{ images, currentImageIndex, setCurrentImageIndex }}
    >
      {children}
    </ModalContext.Provider>
  );
};
