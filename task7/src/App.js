import React, { useReducer } from 'react';

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, [action.counter]: state[action.counter] + action.payload };
    case 'DECREMENT':
      return { ...state, [action.counter]: state[action.counter] - action.payload };
    case 'INCREMENTBY5':
      return { ...state, [action.counter]: state[action.counter] + action.payload};
    case 'DECREMENTBY5':
      return { ...state, [action.counter]: state[action.counter] - action.payload };
    case 'RESET':
      return { ...state, [action.counter]: 0 };
    default:
      return state;
  }
};
/*const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { [action.counter]: state[action.counter] + action.payload });
    case 'DECREMENT':
      return Object.assign({}, state, { [action.counter]: state[action.counter] - action.payload });
    case 'INCREMENTBY5':
      return Object.assign({}, state, { [action.counter]: state[action.counter] + 5 });
    case 'DECREMENTBY5':
      return Object.assign({}, state, { [action.counter]: state[action.counter] - 5 });
    case 'RESET':
      return Object.assign({}, state, { [action.counter]: 0 });
    default:
      return state;
  }
};
*/

// Counter component
const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, { firstcounter: 0, secondcounter: 0 });

  const handleIncrement = (counter) => {
    dispatch({ type: 'INCREMENT', counter, payload: 1 });
  };

  const handleDecrement = (counter) => {
    dispatch({ type: 'DECREMENT', counter, payload: 1 });
  };

  const handleIncrementBy5 = (counter) => {
    dispatch({ type: 'INCREMENTBY5', counter,payload:5 });
  };

  const handleDecrementBy5 = (counter) => {
    dispatch({ type: 'DECREMENTBY5', counter,payload:5});
  };

  const handleReset = (counter) => {
    dispatch({ type: 'RESET', counter });
  };

  return (
    <div>
      <p>First Counter: {count.firstcounter}</p>
      <button onClick={() => handleIncrement('firstcounter')}>Increment</button>
      <button onClick={() => handleDecrement('firstcounter')}>Decrement</button>
      <button onClick={() => handleIncrementBy5('firstcounter')}>Increment by 5</button>
      <button onClick={() => handleDecrementBy5('firstcounter')}>Decrement by 5</button>
      <button onClick={() => handleReset('firstcounter')}>Reset</button>

      <p>Second Counter: {count.secondcounter}</p>
      <button onClick={() => handleIncrement('secondcounter')}>Increment</button>
      <button onClick={() => handleDecrement('secondcounter')}>Decrement</button>
      <button onClick={() => handleIncrementBy5('secondcounter')}>Increment by 5</button>
      <button onClick={() => handleDecrementBy5('secondcounter')}>Decrement by 5</button>
      <button onClick={() => handleReset('secondcounter')}>Reset</button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <h2>Counters</h2>
      <Counter />
    </div>
  );
};

export default App;
