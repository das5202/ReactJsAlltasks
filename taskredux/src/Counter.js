import React from 'react';
import { connect } from 'react-redux';
import {
  incrementCounter1,
  decrementCounter1,
  incrementByFiveCounter1,
  decrementByFiveCounter1,
  resetCounter1,
  incrementCounter2,
  decrementCounter2,
  incrementByFiveCounter2,
  decrementByFiveCounter2,
  resetCounter2,
} from './actions';

const Counter = ({
  count1,
  count2,
  onIncrement1,
  onDecrement1,
  onIncrementByFive1,
  onDecrementByFive1,
  onReset1,
  onIncrement2,
  onDecrement2,
  onIncrementByFive2,
  onDecrementByFive2,
  onReset2,
}) => {
  return (
    <div>
      <div>
        <p>Counter 1: {count1}</p>
        <button onClick={onIncrement1}>Increment</button>
        <button onClick={onDecrement1}>Decrement</button>
        <button onClick={onIncrementByFive1}>Increment by 5</button>
        <button onClick={onDecrementByFive1}>Decrement by 5</button>
        <button onClick={onReset1}>Reset</button>
      </div>
      <div>
        <p>Counter 2: {count2}</p>
        <button onClick={onIncrement2}>Increment</button>
        <button onClick={onDecrement2}>Decrement</button>
        <button onClick={onIncrementByFive2}>Increment by 5</button>
        <button onClick={onDecrementByFive2}>Decrement by 5</button>
        <button onClick={onReset2}>Reset</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count1: state.counter1.count,
    count2: state.counter2.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement1: () => dispatch(incrementCounter1()),
    onDecrement1: () => dispatch(decrementCounter1()),
    onIncrementByFive1: () => dispatch(incrementByFiveCounter1()),
    onDecrementByFive1: () => dispatch(decrementByFiveCounter1()),
    onReset1: () => dispatch(resetCounter1()),
    onIncrement2: () => dispatch(incrementCounter2()),
    onDecrement2: () => dispatch(decrementCounter2()),
    onIncrementByFive2: () => dispatch(incrementByFiveCounter2()),
    onDecrementByFive2: () => dispatch(decrementByFiveCounter2()),
    onReset2: () => dispatch(resetCounter2()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
