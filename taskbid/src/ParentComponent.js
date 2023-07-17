import React, { useState } from 'react';
import { TextField, Checkbox } from '@material-ui/core';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [parentText, setParentText] = useState('');
  const [childText, setChildText] = useState('');
  const [renderChild, setRenderChild] = useState(true);

  const handleParentTextChange = (event) => {
    setParentText(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setRenderChild(event.target.checked);
    setChildText(''); 
  };

  const handleChildTextChange = (event) => {
    setChildText(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Parent Text"
        value={parentText}
        onChange={handleParentTextChange}
      />
      <Checkbox
        checked={renderChild}
        onChange={handleCheckboxChange}
      />
      {renderChild ? (
        <ChildComponent
          parentText={parentText}
          childText={childText}
          onChildTextChange={handleChildTextChange}
        />
      ) : null}
      {renderChild && <p>Parent component showing child data: {childText}</p>}
      {!renderChild && <p> Only Parent Text: {parentText}</p>}
    </div>
  );
};

export default ParentComponent;
