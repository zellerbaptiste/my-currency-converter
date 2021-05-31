import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import converterReducer from '../features/converter/converterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    converter: converterReducer,
  },
});
