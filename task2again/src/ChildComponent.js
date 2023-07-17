import React, { useState } from 'react';
import { TextField } from '@mui/material';

const ChildComponent = ({ parentText }) => {
  const [childText, setChildText] = useState(parentText);

  const handleChildTextChange = (event) => {
    setChildText(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Child Text"
        value={childText}
        onChange={handleChildTextChange}
      />
      <p>{childText}</p>
    </div>
  );
};

export default ChildComponent;
