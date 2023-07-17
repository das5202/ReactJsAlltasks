import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { combineReducers} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import App from './App';
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
import Counter from './Counter';

const counter1Reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER_1':
      return { count: state.count + 1 };
    case 'DECREMENT_COUNTER_1':
      return { count: state.count - 1 };
    case 'INCREMENT_BY_FIVE_COUNTER_1':
      return { count: state.count + 5 };
    case 'DECREMENT_BY_FIVE_COUNTER_1':
      return { count: state.count - 5 };
    case 'RESET_COUNTER_1':
      return { count: 0 };
    default:
      return state;
  }
};

const counter2Reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER_2':
      return { count: state.count + 1 };
    case 'DECREMENT_COUNTER_2':
      return { count: state.count - 1 };
    case 'INCREMENT_BY_FIVE_COUNTER_2':
      return { count: state.count + 5 };
    case 'DECREMENT_BY_FIVE_COUNTER_2':
      return { count: state.count - 5 };
    case 'RESET_COUNTER_2':
      return { count: 0 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter1: counter1Reducer,
  counter2: counter2Reducer,
});

const store = createStore(rootReducer);

const CounterApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

createRoot(document.getElementById('root')).render(<CounterApp />);
