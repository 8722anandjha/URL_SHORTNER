import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth.slice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});