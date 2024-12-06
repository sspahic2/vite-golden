// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { VITE_BASE_URL } from '../../config/routes';
// import { RootState } from '../ReduxStore';
// // const UNKNOWN_ERROR = 'An unknown error occurred';



// export interface IOfferProps {
//     id: string;
//     name: string;
//     category: string;
//     where: string;
//     rubrics: string[];
//     keywords: string;
//     helpsWith: string;
//     location: string;
//     postalCode: string;
//     description: string;
//     bookingText: string;
//     image: string;
//     price: number;
//     discount: number;
//     type?: string;
//     date?: string;
//     originalPrice?: number;
//     user_id?: string;
// }


// interface IAllOffersProps {
//     offers: IOfferProps[];
//     paging: {
//         totalCount: number;
//         currentPage: number;
//         totalPages: number;
//         limit: number;
//     };
//     page?: number;
//     limit?: number;
// }

// interface GetAllOffersParams {
//     page?: number;
//     limit?: number;
//     query?: string;
//     name?: string;
//     locationOrPostalCode?: string;
// }

// interface IOfferDetailsResponse {
//     success: boolean;
//     data: IOfferProps;
// }

// export interface IOffersByPartner {
//     id: string | number;
//     image: string;
//     price?: number;
//     location?: string;
//     description: string;
//     publicDate?: string;
//     discount?: number;
//     name?: string;
//     data: []
// }






// export const createOfferIndividual = createAsyncThunk<IOfferProps, FormData>(
//     'offer/createOfferIndividual',
//     async (formData, { getState, rejectWithValue }) => {
//         try {
//             const state = getState() as RootState;
//             const token = state.authentication.authToken;

//             const response = await axios.post<IOfferProps>(`${VITE_BASE_URL}/create-offer-individual`,
//                 formData,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         // 'Content-Type': 'application/json',
//                     },
//                 }
//             );
//             return response.data;
//         } catch (error: unknown) {
//             if (axios.isAxiosError(error)) {
//                 const errorMessage = error.response?.data || 'An error occurred';
//                 return rejectWithValue(errorMessage);
//             }
//             return rejectWithValue('An unknown error occurred');
//         }
//     }
// );

// export const createOfferEvent = createAsyncThunk<IOfferProps, FormData>(
//     'offer/createOfferEvent',
//     async (formData, { getState, rejectWithValue }) => {
//         try {
//             const state = getState() as RootState;
//             const token = state.authentication.authToken;

//             const response = await axios.post<IOfferProps>(`${VITE_BASE_URL}/create-offer-event`,
//                 formData,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         // 'Content-Type': 'application/json',
//                     },
//                 }
//             );
//             return response.data;
//         } catch (error: unknown) {
//             if (axios.isAxiosError(error)) {
//                 const errorMessage = error.response?.data || 'An error occurred';
//                 return rejectWithValue(errorMessage);
//             }
//             return rejectWithValue('An unknown error occurred');
//         }
//     }
// );


// export const getAllOffers = createAsyncThunk<IAllOffersProps, GetAllOffersParams>(
//     'offers/getAllOffers',
//     async ({ page = 1, limit = 16 }: GetAllOffersParams = {}, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`${VITE_BASE_URL}/offers?page=${page}&limit=${limit}`);
//             const { data, paging } = response.data;
//             return {
//                 offers: data,
//                 paging: paging
//             };
//         } catch (error: unknown) {
//             if (axios.isAxiosError(error)) {
//                 const errorMessage = error.response?.data || 'An error occurred';
//                 return rejectWithValue(errorMessage);
//             }
//             return rejectWithValue('An unknown error occurred');
//         }
//     }
// );


// export const getOffersByQuery = createAsyncThunk<IAllOffersProps, GetAllOffersParams>(
//     'offers/getOffersByQuery',
//     async ({ name = '', locationOrPostalCode = '', page = 1, limit = 16 }: GetAllOffersParams, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`${VITE_BASE_URL}/offers/query?name=${name}&locationOrPostalCode=${locationOrPostalCode}&page=${page}&limit=${limit}`);

//             const { data, paging } = response.data;
//             return {
//                 offers: data,
//                 paging: paging
//             };
//         } catch (error: unknown) {
//             if (axios.isAxiosError(error)) {
//                 const errorMessage = error.response?.data || 'An error occurred';
//                 return rejectWithValue(errorMessage);
//             }
//             return rejectWithValue('An unknown error occurred');
//         }
//     }
// );

// export const getAllOffersByPartner = createAsyncThunk<IOffersByPartner, string>(
//     'offers/getAllOffersByPartner',
//     async (id: string, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`${VITE_BASE_URL}/offers-partner/${id}`);
//             if (response.data) {
//                 return response.data;
//             } else {
//                 return rejectWithValue('No data found');
//             }
//         } catch (error: unknown) {
//             if (axios.isAxiosError(error)) {
//                 const errorMessage = error.response?.data?.message || 'An error occurred';
//                 return rejectWithValue(errorMessage);
//             }
//             return rejectWithValue('An unknown error occurred');
//         }
//     }
// );








// export const getOfferDetails = createAsyncThunk<IOfferDetailsResponse, string>(
//     'offers/getOfferDetails',
//     async (id: string, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`${VITE_BASE_URL}/offer/${id}`);
//             return response.data;
//         } catch (error: unknown) {
//             if (axios.isAxiosError(error)) {
//                 const errorMessage = error.response?.data || 'An error occurred';
//                 return rejectWithValue(errorMessage);
//             }
//             return rejectWithValue('An unknown error occurred');
//         }
//     }
// );











// const initialState = {
//     loading: true,
//     error: null as string | null,
//     offer: null as IOfferProps | null,
//     offerDetails: null as IOfferDetailsResponse | null,
//     offersByPartner: [] as IOfferProps[],
//     isCreatedIndividual: false,
//     offers: [] as IOfferProps[],
//     searchResults: [] as IOfferProps[],
//     pagingInformation: null as {
//         totalCount: number;
//         currentPage: number;
//         totalPages: number;
//         limit: number;
//     } | null,
// };

// const offerSlice = createSlice({
//     name: 'offer',
//     initialState,
//     reducers: {
//         clearCreatedStatus: (state) => {
//             state.isCreatedIndividual = false;
//         },
//         clearCreatedError: (state) => {
//             state.error = null as string | null;
//         },
//         clearSearchResults: (state) => {
//             state.searchResults = [];
//         }
//     },
//     extraReducers: (builder) => {
//         builder

//             // get all offers
//             .addCase(getAllOffers.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(getAllOffers.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.offers = action.payload.offers;
//                 state.pagingInformation = action.payload.paging;

//             })
//             .addCase(getAllOffers.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = typeof action.payload === 'string' ? action.payload : 'Greska za all offers';
//             })

//             // get offers by query
//             .addCase(getOffersByQuery.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(getOffersByQuery.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.searchResults = action.payload.offers;
//                 state.pagingInformation = action.payload.paging;

//             })
//             .addCase(getOffersByQuery.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = typeof action.payload === 'string' ? action.payload : 'Error for get all offers';
//             })




//             // create offer individual
//             .addCase(createOfferIndividual.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//                 state.isCreatedIndividual = false;
//             })
//             .addCase(createOfferIndividual.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.offer = action.payload;
//                 state.isCreatedIndividual = true;

//             })
//             .addCase(createOfferIndividual.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
//                 state.isCreatedIndividual = false;
//             })

//             // create offer event
//             .addCase(createOfferEvent.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//                 state.isCreatedIndividual = false;
//             })
//             .addCase(createOfferEvent.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.offer = action.payload;
//                 state.isCreatedIndividual = true;

//             })
//             .addCase(createOfferEvent.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
//                 state.isCreatedIndividual = false;
//             })

//             // get offer details
//             .addCase(getOfferDetails.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(getOfferDetails.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.offerDetails = action.payload;

//             })
//             .addCase(getOfferDetails.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
//             })

//             // get offers by partner
//             .addCase(getAllOffersByPartner.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(getAllOffersByPartner.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.error = null;
//                 state.offersByPartner = action.payload.data;

//             })
//             .addCase(getAllOffersByPartner.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
//             })
//     },
// });


// export const { clearCreatedStatus, clearCreatedError, clearSearchResults } = offerSlice.actions;

// export default offerSlice.reducer;










import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { VITE_BASE_URL } from '../../config/routes';
import { RootState } from '../ReduxStore';
// const UNKNOWN_ERROR = 'An unknown error occurred';



export interface IOfferProps {
    id: string;
    name: string;
    category: string;
    where: string;
    rubrics: string[];
    keywords: string;
    helpsWith: string;
    location: string;
    postalCode: string;
    description: string;
    bookingText: string;
    image: string;
    price: number;
    discount: number;
    type?: string;
    date?: string;
    originalPrice?: number;
    user_id?: string;
}


interface IAllOffersProps {
    offers: IOfferProps[];
    paging: {
        totalCount: number;
        currentPage: number;
        totalPages: number;
        limit: number;
    };
    page?: number;
    limit?: number;
}

interface GetAllOffersParams {
    page?: number;
    limit?: number;
    query?: string;
    name?: string;
    locationOrPostalCode?: string;
}

interface IOfferDetailsResponse {
    success: boolean;
    data: IOfferProps;
}

export interface IOffersByPartner {
    id: string | number;
    image: string;
    price?: number;
    location?: string;
    description: string;
    publicDate?: string;
    discount?: number;
    name?: string;
    data: []
}






export const createOfferIndividual = createAsyncThunk<IOfferProps, FormData>(
    'offer/createOfferIndividual',
    async (formData, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.post<IOfferProps>(`${VITE_BASE_URL}/create-offer-individual`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        // 'Content-Type': 'application/json',
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

export const createOfferEvent = createAsyncThunk<IOfferProps, FormData>(
    'offer/createOfferEvent',
    async (formData, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.post<IOfferProps>(`${VITE_BASE_URL}/create-offer-event`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        // 'Content-Type': 'application/json',
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


export const getAllOffers = createAsyncThunk<IAllOffersProps, GetAllOffersParams>(
    'offers/getAllOffers',
    async ({ page = 1, limit = 16 }: GetAllOffersParams = {}, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${VITE_BASE_URL}/offers?page=${page}&limit=${limit}`);
            const { data, paging } = response.data;
            return {
                offers: data,
                paging: paging
            };
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);


export const getOffersByQuery = createAsyncThunk<IAllOffersProps, GetAllOffersParams>(
    'offers/getOffersByQuery',
    async ({ name = '', locationOrPostalCode = '', page = 1, limit = 16 }: GetAllOffersParams, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${VITE_BASE_URL}/offers/query?name=${name}&locationOrPostalCode=${locationOrPostalCode}&page=${page}&limit=${limit}`);

            const { data, paging } = response.data;
            return {
                offers: data,
                paging: paging
            };
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);

export const getAllOffersByPartner = createAsyncThunk<IOffersByPartner, string>(
    'offers/getAllOffersByPartner',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${VITE_BASE_URL}/offers-partner/${id}`);
            if (response.data) {
                return response.data;
            } else {
                return rejectWithValue('No data found');
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || 'An error occurred';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('An unknown error occurred');
        }
    }
);








export const getOfferDetails = createAsyncThunk<IOfferDetailsResponse, string>(
    'offers/getOfferDetails',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${VITE_BASE_URL}/offer/${id}`);
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











const initialState = {
    loading: true,
    error: null as string | null,
    offer: null as IOfferProps | null,
    offerDetails: null as IOfferDetailsResponse | null,
    offersByPartner: [] as IOfferProps[],
    isCreatedIndividual: false,
    offers: [] as IOfferProps[],
    searchResults: [] as IOfferProps[],
    pagingInformation: null as {
        totalCount: number;
        currentPage: number;
        totalPages: number;
        limit: number;
    } | null,
    currentPage: 1,
};

const offerSlice = createSlice({
    name: 'offer',
    initialState,
    reducers: {
        clearCreatedStatus: (state) => {
            state.isCreatedIndividual = false;
        },
        clearCreatedError: (state) => {
            state.error = null as string | null;
        },
        clearSearchResults: (state) => {
            state.searchResults = [];
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload; // Omogućava postavljanje trenutne stranice
        }
    },
    extraReducers: (builder) => {
        builder

            // get all offers
            .addCase(getAllOffers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllOffers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.offers = action.payload.offers;
                state.pagingInformation = action.payload.paging;
                state.currentPage = action.payload.paging.currentPage;

            })
            .addCase(getAllOffers.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Greska za all offers';
            })

            // get offers by query
            .addCase(getOffersByQuery.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOffersByQuery.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.searchResults = action.payload.offers;
                state.pagingInformation = action.payload.paging;
                state.currentPage = action.payload.paging.currentPage;

            })
            .addCase(getOffersByQuery.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Error for get all offers';
            })




            // create offer individual
            .addCase(createOfferIndividual.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isCreatedIndividual = false;
            })
            .addCase(createOfferIndividual.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.offer = action.payload;
                state.isCreatedIndividual = true;

            })
            .addCase(createOfferIndividual.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
                state.isCreatedIndividual = false;
            })

            // create offer event
            .addCase(createOfferEvent.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isCreatedIndividual = false;
            })
            .addCase(createOfferEvent.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.offer = action.payload;
                state.isCreatedIndividual = true;

            })
            .addCase(createOfferEvent.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
                state.isCreatedIndividual = false;
            })

            // get offer details
            .addCase(getOfferDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOfferDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.offerDetails = action.payload;

            })
            .addCase(getOfferDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
            })

            // get offers by partner
            .addCase(getAllOffersByPartner.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllOffersByPartner.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.offersByPartner = action.payload.data;

            })
            .addCase(getAllOffersByPartner.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
            })
    },
});


export const { clearCreatedStatus, clearCreatedError, clearSearchResults } = offerSlice.actions;

export default offerSlice.reducer;


