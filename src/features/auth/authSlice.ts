import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, AuthUser } from "./types";


const initialState: AuthState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginSuccess: (state, action: PayloadAction<{ user: AuthUser; accessToken: string }>) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
      },
      logout: (state) => {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
      }
    }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;