import React, { useState, useEffect } from 'react';


const ChildComponent = ({ parentText }) => {
  const [childText, setChildText] = useState('');

  /*useEffect(() => {
    setChildText(parentText);
  }, [parentText]);*/

  const handleChildTextChange = (event) => {
    const { value } = event.target;
    setChildText(value);
  };

  return (
    <div>
      <input type="text"
        label="Child Text"
       // value={childText}
        onChange={handleChildTextChange}
      />
      <br />
      <p>This is the child component displays {parentText}</p>
    </div>
  );
};

export default ChildComponent;
