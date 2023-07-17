// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from "redux";
import { counterReducer } from './counterReducers';
import Counter from './Counter';
import { createRoot } from 'react-dom/client'


const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter counterId="counter1" />
      <Counter counterId="counter2" />
    </div>
  </Provider>,
  document.getElementById('root')
);
