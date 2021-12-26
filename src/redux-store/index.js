import { configureStore } from '@reduxjs/toolkit';
import { communicationReducer } from 'pages/Communication/slice';

export const store = configureStore({
  reducer: {
    communication: communicationReducer,
  },
});
