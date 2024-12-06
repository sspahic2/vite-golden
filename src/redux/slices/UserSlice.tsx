import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { VITE_BASE_URL } from '../../config/routes';
import { RootState } from '../ReduxStore';
import { setAuthError, setAuthToken } from './AuthenticationSlice';
const UNKNOWN_ERROR = 'An unknown error occurred';

interface UserState {
    user: User | null;
    userDetails: IUserDetailsResponse | null;
    allUsers: IUserDetailsResponse | null;
    loading: boolean;
    isAuthenticated: boolean;
    error: string | null;
    isRegistered: boolean;
    isUpdate: boolean;
    isLogged: boolean;
    id: string;
}

interface User {
    id?: string;
    nameSurname?: string;
    email?: string;
    password?: string;
    nickName?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    role?: string;
    imageProfile?: string;
}

export interface IUserDetails {
    id?: number;
    nameSurname?: string;
    nickName?: string;
    companyName?: string | null;
    address?: string;
    telephone?: string;
    city?: string;
    email?: string;
    postalCode?: string;
    businessDescription?: string;
    country?: string | null;
    role?: string;
    vocation?: string;
    motto?: string;
    shortDescription?: string;
    imageProfile?: string;
    linkWeb?: string;
    linkFacebook?: string;
    linkInstagram?: string;
    linkTwitter?: string;
    linkYoutube?: string;
    createdAt?: string;
    updatedAt?: string;
}

interface IUserDetailsResponse {
    ok: boolean;
    // data: IUserDetails[];
    data: {
        nameSurname: string;
        businessDescription: string;
        shortDescription: string;
        linkWeb: string;
        telephone: string;
        email: string;
        imageProfile: string;
        linkFacebook: string;
        linkInstagram: string;
        linkTwitter: string;

    };
    status: string;
}



interface LoginRegisterResponse {
    user: {
        id: string;
        nameSurname: string;
        email: string;
        role: string;
        imageProfile: string;
    };
    token: string;
}



interface UserCustomer {
    email: string;
    password: string;
    telephone: string;
    nameSurname: string;
    token?: string;
    id?: string;
}

interface UserPartner {
    nameSurname: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    companyName: string;
    telephone: string;
    email: string;
    businessDescription: string;
    token?: string;
    id?: string;
}



export interface UpdateUser {
    id?: string;
    nameSurname?: string;
    email?: string;
    password?: string;
    nickName?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    token?: string;
    user?: User;
    vocation?: string;
    motto?: string;
    shortDescription?: string;
    linkWeb?: string;
    linkFacebook?: string;
    linkInstagram?: string;
    linkTwitter?: string;
    linkYoutube?: string;
    imageProfile?: string;
}


// login
export const loginUser = createAsyncThunk(
    'user/login',
    async (user: { email: string; password: string }, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post<LoginRegisterResponse>(`${VITE_BASE_URL}/login`, user);
            const { token, user: userData } = response.data;
            if (token) {
                dispatch(setAuthToken(token));
                Cookies.set('token', token, { expires: 7 });
            }
            if (userData) {
                Cookies.set('user', JSON.stringify(userData), { expires: 7 });
            }
            return { token, user: userData };
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || { UNKNOWN_ERROR };
                dispatch(setAuthError(errorMessage));
                return rejectWithValue(errorMessage);
            }
            dispatch(setAuthError('An unknown error occurred'));
            return rejectWithValue('An unknown error occurred');
        }
    }
);







// Async thunk for customer registration
export const registerCustomer = createAsyncThunk<LoginRegisterResponse, UserCustomer>(
    'user/registerCustomer',
    async (userCustomer, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post<LoginRegisterResponse>(`${VITE_BASE_URL}/register-customer`, userCustomer);
            const { token, user: userData } = response.data;
            if (token) {
                dispatch(setAuthToken(token));
                Cookies.set('token', token, { expires: 7 });
            }
            if (userData) {
                Cookies.set('user', JSON.stringify(userData), { expires: 7 });
            }
            return { token, user: userData };
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);

export const registerPartner = createAsyncThunk<LoginRegisterResponse, UserPartner>(
    'user/registerPartner',
    async (userPartner, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post<LoginRegisterResponse>(`${VITE_BASE_URL}/register-partner`, userPartner);
            const { token, user: userData } = response.data;
            if (token) {
                dispatch(setAuthToken(token));
                Cookies.set('token', token, { expires: 7 });
            }
            if (userData) {
                Cookies.set('user', JSON.stringify(userData), { expires: 7 });
            }
            return { token, user: userData };
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);







export const updateUser = createAsyncThunk<UpdateUser, FormData, { rejectValue: string }>(
    'user/updateUser',
    async (formData, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.patch<UpdateUser>(
                `${VITE_BASE_URL}/update`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        // 'Content-Type': 'multipart/form-data',
                    },
                }
            );

            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);



// logout user
export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.get(`${VITE_BASE_URL}/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);

// delete user
export const deleteUser = createAsyncThunk(
    'user/delete',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;
            const response = await axios.delete(`${VITE_BASE_URL}/delete-user`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);


export const getUser = createAsyncThunk<IUserDetailsResponse, string, { rejectValue: string }>(
    'user/getUser',
    async (id: string, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.get(`${VITE_BASE_URL}/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);


export const getAllUsers = createAsyncThunk<IUserDetailsResponse>(
    'user/getAllUsers',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.get(`${VITE_BASE_URL}/users`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);







const initialState: UserState = {
    user: Cookies.get('user') ? JSON.parse(Cookies.get('user')!) : null,
    loading: false,
    isAuthenticated: !!Cookies.get('token'),
    error: null,
    isRegistered: false,
    isUpdate: false,
    isLogged: false,
    id: Cookies.get('user') ? JSON.parse(Cookies.get('user')!).id : null,
    userDetails: null,
    allUsers: null,

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearErrors(state) {
            state.error = null;
        },
        authenticateUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUpdateStatus(state) {
            state.isUpdate = false;
        },
        clearLoggedStatus(state) {
            state.isLogged = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.isLogged = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.isLogged = true;
                state.user = action.payload.user;
                const userFromCookie = Cookies.get('user');
                if (userFromCookie) {
                    state.user = JSON.parse(userFromCookie);
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.isLogged = false;
            })


            // registerCustomer
            .addCase(registerCustomer.pending, (state) => {
                state.loading = true;
                state.isRegistered = false;
            })
            .addCase(registerCustomer.fulfilled, (state) => {
                state.loading = false;
                state.isRegistered = true;
                const userFromCookie = Cookies.get('user');
                if (userFromCookie) {
                    state.user = JSON.parse(userFromCookie);
                }
                state.isAuthenticated = true;

            })
            .addCase(registerCustomer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.isRegistered = false;
            })

            // registerPartner
            .addCase(registerPartner.pending, (state) => {
                state.loading = true;
                state.isRegistered = false;
            })
            .addCase(registerPartner.fulfilled, (state) => {
                state.loading = false;
                state.isRegistered = true;
                const userFromCookie = Cookies.get('user');
                if (userFromCookie) {
                    state.user = JSON.parse(userFromCookie);
                }
                state.isAuthenticated = true;

            })
            .addCase(registerPartner.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.isRegistered = false;
            })

            // update User
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
                state.isUpdate = false;
            })
            // .addCase(updateUser.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.isUpdate = true;
            // })
            // update User
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isUpdate = true;
                const updatedUser = action.payload.user;
                if (updatedUser) {
                    Cookies.set('user', JSON.stringify(updatedUser), { expires: 7 });
                    state.user = updatedUser;
                } else {
                    state.user = null;
                }
                state.isAuthenticated = true;
            })

            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // logoutAsync
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.isRegistered = false;
                Cookies.remove('user');
                Cookies.remove('token');
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // delete user
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                state.isRegistered = false;
                Cookies.remove('user');
                Cookies.remove('token');
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // get user
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action: PayloadAction<IUserDetailsResponse>) => {
                state.loading = false;
                state.userDetails = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // get all user
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllUsers.fulfilled, (state, action: PayloadAction<IUserDetailsResponse>) => {
                state.loading = false;
                state.allUsers = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export const { clearErrors, authenticateUser, clearUpdateStatus, clearLoggedStatus } = userSlice.actions;
export default userSlice.reducer;
