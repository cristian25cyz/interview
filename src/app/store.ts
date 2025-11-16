import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import { peopleApi } from "../features/people/services/peopleApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;