import React, { useState } from 'react';
import ChildText from './components/ChildComponent';

import ChildComponent from './components/ChildComponent';

const App= () => {
  const [parentText, setParentText] = useState('');
  const [isChildVisible, setIsChildVisible] = useState(true);

  const handleParentTextChange = (event) => {
    const { value } = event.target;
    setParentText(value);
  };

  const handleCheckboxChange = (event) => {
    setIsChildVisible(event.target.checked);
  };

  return (
    <div>
      <input type="text"
        label="Parent Text"
        value={parentText}
        onChange={handleParentTextChange}
      />
      <br />
      <p>this is parent component displays {ChildText}  </p>
      <input type="checkbox"
        checked={!isChildVisible}
        onChange={handleCheckboxChange}
        color="primary"
      />
      
      <label>Disable Child Paragraph</label>
      {isChildVisible ? (
        <ChildComponent parentText={parentText} />
      ) : null}
    </div>
  );
};

export default App;
