import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { VITE_BASE_URL } from '../../config/routes';
import { RootState } from '../ReduxStore';

export interface IFavoriteProps {
    id: string;
    user_id: string;
    offer_id?: string;
    partner_id?: string;
    isFavorite: boolean;
}

export interface ICreateFavoriteProps {
    offer_id?: string;
}

export interface ICreateFavoritePartnerProps {
    partner_id?: string;
}

export interface IGetAllFavoriteProps {
    id: string;
    user_id: string;
    offer_id: string;
    isFavorite: boolean;
    partner_id?: string;
}

export const createOrRemoveFavorite = createAsyncThunk<IFavoriteProps, ICreateFavoriteProps>(
    'favorite/createFavorite',
    async ({ offer_id }, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;
            const response = await axios.post(
                `${VITE_BASE_URL}/create-or-remove-favorite/${offer_id}`,
                { offer_id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );


            if (response.data.success) {
                return response.data.data;
            } else {
                return rejectWithValue(response.data.message);
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'Error creating favorite';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('Error creating favorite');
        }
    }
);


export const getAllFavorites = createAsyncThunk<IGetAllFavoriteProps[], void>(
    'favorite/getAllFavorites',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;
            const response = await axios.get(`${VITE_BASE_URL}/favorites-user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data) {
                return response.data.data;
            } else {
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data || 'Error fetching favorites');
            }
            return rejectWithValue('Error fetching favorites');
        }
    }
);

export const createOrRemoveFavoritePartner = createAsyncThunk<IFavoriteProps, ICreateFavoritePartnerProps>(
    'favorite/createFavoritePartner',
    async ({ partner_id }: ICreateFavoritePartnerProps, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.post(
                `${VITE_BASE_URL}/create-or-remove-favorite-partner`,
                { partner_id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.success) {
                return response.data.data;
            } else {
                return rejectWithValue(response.data.message);
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'Error creating favorite';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('Error creating favorite');
        }
    }
);




const initialState = {
    loading: true,
    error: null as string | null,
    favorite: null as IFavoriteProps | null,
    isCreatedFavorite: false,
    favorites: [] as IGetAllFavoriteProps[],
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        clearCreatedStatus: (state) => {
            state.isCreatedFavorite = false;
        },
        clearCreatedError: (state) => {
            state.error = null as string | null;
        },
        resetIsCreatedFavorite: (state) => {
            state.isCreatedFavorite = false;
        },

    },
    extraReducers: (builder) => {
        builder

            // create favorite offer
            .addCase(createOrRemoveFavorite.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isCreatedFavorite = false;
            })
            .addCase(createOrRemoveFavorite.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.favorite = action.payload;
                state.isCreatedFavorite = true;
            })
            .addCase(createOrRemoveFavorite.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
                state.isCreatedFavorite = false;
            })

            // get all favorites
            .addCase(getAllFavorites.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllFavorites.fulfilled, (state, action) => {
                state.loading = false;
                state.favorites = action.payload;
            })
            .addCase(getAllFavorites.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Error fetching favorites';
            })

            // create favorite partner
            .addCase(createOrRemoveFavoritePartner.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isCreatedFavorite = false;
            })
            .addCase(createOrRemoveFavoritePartner.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.favorite = action.payload;
                state.isCreatedFavorite = true;
            })
            .addCase(createOrRemoveFavoritePartner.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
                state.isCreatedFavorite = false;
            })
    },
});


export const { clearCreatedStatus, clearCreatedError, resetIsCreatedFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;


