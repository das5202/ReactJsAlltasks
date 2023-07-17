// counterReducers.js
const initialState = {
    counters: {
      counter1: 0,
      counter2: 0,
    },
  };
  
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER': {
        const { counterId, value } = action.payload;
        return {
          ...state,
          counters: {
            ...state.counters,
            [counterId]: state.counters[counterId] + value,
          },
        };
      }
      case 'DECREMENT_COUNTER': {
        const { counterId, value } = action.payload;
        return {
          ...state,
          counters: {
            ...state.counters,
            [counterId]: state.counters[counterId] - value,
          },
        };
      }
      case 'RESET_COUNTER': {
        const { counterId } = action.payload;
        return {
          ...state,
          counters: {
            ...state.counters,
            [counterId]: 0,
          },
        };
      }
      default:
        return state;
    }
  };
  