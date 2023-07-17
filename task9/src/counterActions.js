// counterActions.js
export const incrementCounter = (counterId, value) => ({
    type: 'INCREMENT_COUNTER',
    payload: { counterId, value },
  });
  
  export const decrementCounter = (counterId, value) => ({
    type: 'DECREMENT_COUNTER',
    payload: { counterId, value },
  });
  
  export const resetCounter = (counterId) => ({
    type: 'RESET_COUNTER',
    payload: { counterId },
  });
  