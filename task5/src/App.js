// App.js

import React from 'react';

import ComponentA from './ComponentA';

import ReactDOM from 'react-dom';

ReactDOM.render(<ComponentA />, document.getElementById('root'));




const App = () => {

  return (

    <div className="App">

      <h1>My App</h1>

      <ComponentA />

    </div>

  );

};




export default App;