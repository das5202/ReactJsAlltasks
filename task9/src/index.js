
import React, { useMemo } from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from "redux";
import { counterReducer } from './counterReducers';
import Counter from './Counter';

const store = createStore(counterReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div>
      <Counter counterId="counter1" />
      <Counter counterId="counter2" />
    </div>
  </Provider>
);
