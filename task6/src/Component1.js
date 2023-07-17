import React from 'react';
import { Link } from 'react-router-dom';

const Component1 = () => {
  return (
    <div>
      <h2>Component 1</h2>
      <h3>This is Component 1 redirects to componet 3</h3>
      <button>
        
        <Link to="/component3">Go </Link>
      </button>
    </div>
  );
};

export default Component1;
