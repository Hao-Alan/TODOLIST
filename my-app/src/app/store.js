import { configureStore } from '@reduxjs/toolkit';
import counterReducerxxx from '../features/counter/counterSliceHambe';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counterxxx: counterReducerxxx,
    counter: counterReducer,
  },
});
