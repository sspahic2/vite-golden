import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { VITE_BASE_URL } from '../../config/routes';
import { RootState } from '../ReduxStore';

export interface IReviewProps {
    id: string;
    user_id: string;
    partner_id: string;
    reviewText: string;
}

export interface ICreateReviewProps {
    partner_id: string;
    rating: number;
    reviewText: string;
}

export interface IGetAllReviewsProps {
    id: string;
    user_id: string;
    partner_id: string;
    rating: number;
    reviewText: string;
    createdAt?: string;
    user: {
        nameSurname: string;
        imageProfile: string;
    };
}

export interface IGetPartnerProps {
    id: string;
    partner_id: string;
    nameSurname: string;
    imageProfile: string;
    city: string;
    average_rating: number;
    rating: number;
    shortDescription: string;
}


export const createReviewPartner = createAsyncThunk<IReviewProps, ICreateReviewProps>(
    'review/createReviewPartner',
    async ({ partner_id, rating, reviewText }, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.post<{ success: boolean, message: string, data: IReviewProps }>(
                `${VITE_BASE_URL}/create-review/${partner_id}`,
                { rating, reviewText },
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
                const errorMessage = error.response?.data || 'Došlo je do greške';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('Došlo je do nepoznate greške');
        }
    }
);


export const getAllReviews = createAsyncThunk(
    'offers/getAllReviews',
    async (id: string, { getState, rejectWithValue }) => {
        const state = getState() as RootState;
        const token = state.authentication.authToken;
        try {
            const response = await axios.get(
                `${VITE_BASE_URL}/reviews-user/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const { data } = response.data;
            return { reviews: data };

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);


export const getPartnerReviews = createAsyncThunk(
    'offers/getPartnerReviews',
    async (_, { getState, rejectWithValue }) => {
        const state = getState() as RootState;
        const token = state.authentication.authToken;
        try {
            const response = await axios.get(`${VITE_BASE_URL}/reviews-user`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const { data } = response.data;
            return { reviews: data };
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);







const initialState = {
    loading: true,
    error: null as string | null,
    review: null as IReviewProps | null,
    isCreatedPartner: false,
    reviews: [] as IGetAllReviewsProps[],
    reviewsPartner: [] as IGetPartnerProps[],
};

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        clearCreatedStatus: (state) => {
            state.isCreatedPartner = false;
        },
        clearCreatedError: (state) => {
            state.error = null as string | null;
        },
        clearReviews: (state) => {
            state.reviews = [];
        },

    },
    extraReducers: (builder) => {
        builder

            // create review partner
            .addCase(createReviewPartner.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isCreatedPartner = false;
            })
            .addCase(createReviewPartner.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.review = action.payload;
                state.isCreatedPartner = true;
            })
            .addCase(createReviewPartner.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
                state.isCreatedPartner = false;
            })

            // get all reviews
            .addCase(getAllReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = action.payload.reviews;
            })
            .addCase(getAllReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Error for get all reviews';
            })

            // get reviews partner
            .addCase(getPartnerReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPartnerReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.reviewsPartner = action.payload.reviews;
            })
            .addCase(getPartnerReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Error for get all reviews';
            });
    },
});


export const { clearCreatedStatus, clearCreatedError, clearReviews } = reviewSlice.actions;

export default reviewSlice.reducer;


