import React, { useState } from 'react';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [parentText, setParentText] = useState('');
  const [showChildParagraph, setShowChildParagraph] = useState(true);

  const handleParentTextChange = (event) => {
    setParentText(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setShowChildParagraph(event.target.checked);
  };

  return (
    <div>
      <TextField
        label="Parent Text"
        value={parentText}
        onChange={handleParentTextChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={!showChildParagraph}
            onChange={handleCheckboxChange}
          />
        }
        label="Disable Child Paragraph"
      />
      <p>{parentText}</p>
      {showChildParagraph && <ChildComponent key="child" parentText={parentText} />}
    </div>
  );
};

export default ParentComponent;
