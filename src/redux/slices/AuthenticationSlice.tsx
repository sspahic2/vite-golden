import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface AuthState {
    authToken: string | null;
    isAuthenticated: boolean;
    authError: string | null;
}

const initialState: AuthState = {
    authToken: Cookies.get('token') || null,
    isAuthenticated: !!Cookies.get('token'),
    authError: null,
};

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setAuthToken(state, action: PayloadAction<string>) {
            state.authToken = action.payload;
            state.isAuthenticated = true;
            Cookies.set('token', action.payload, { expires: 7 });
        },
        clearAuthToken(state) {
            state.authToken = null;
            state.isAuthenticated = false;
            Cookies.remove('token');
        },
        setAuthError(state, action: PayloadAction<string>) {
            state.authError = action.payload;
        },
        clearAuthError(state) {
            state.authError = null;
        },

    },
});

export const { setAuthToken, clearAuthToken, setAuthError, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
