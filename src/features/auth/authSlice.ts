import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    user: any | null;
    accessToken: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //login, and logout logic will be added here
    }
});

export const {} = authSlice.actions;
export default authSlice.reducer;