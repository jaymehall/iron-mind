import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import workoutSlice from './workoutSlice';
import nutritionSlice from './nutritionSlice';
import progressSlice from './progressSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    workout: workoutSlice,
    nutrition: nutritionSlice,
    progress: progressSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
}); 