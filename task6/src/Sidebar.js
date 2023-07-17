import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/component1">Component 1</Link>
        </li>
        <li>
          <Link to="/component2">Component 2</Link>
        </li>
        <li>
          <Link to="/component3">Component 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
