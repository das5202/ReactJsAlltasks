import React from 'react';
import { TextField } from '@material-ui/core';

const ChildComponent = ({ parentText, childText, onChildTextChange }) => {
  return (
    <div>
      <TextField
        label="Child Text"
        value={childText}
        onChange={onChildTextChange}
      />
      <p> child component showing parent data:  {parentText}</p>
    </div>
  );
};

export default ChildComponent;
