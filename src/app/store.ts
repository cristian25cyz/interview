import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// I store the token in app memory so it can;'t be attacked by XSS