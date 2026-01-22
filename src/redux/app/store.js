import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from "@/redux/features/jobs/jobsSlice";
import { jobsApi } from '@/redux/services/jobsApi';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});