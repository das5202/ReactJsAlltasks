import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from './counterActions';

const Counter = ({
  counterId,
  counterValue,
  incrementCounter,
  decrementCounter,
  incrementBy5,
  decrementBy5,
  resetCounter,
}) => {
  

  return (
    <div>
      <p>Counter {counterId}: {counterValue}</p>
      <button onClick={() => incrementCounter(counterId, 1)}>Increment</button>
      <button onClick={() => decrementCounter(counterId, 1)}>Decrement</button>
      <button onClick={() => incrementCounter(counterId, 5)}>Increment by 5</button>
      <button onClick={() => decrementCounter(counterId, 5)}>Decrement by 5</button>
      <button onClick={() => resetCounter(counterId)}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    counterValue: state.counters[ownProps.counterId],
  };
};

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  resetCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
