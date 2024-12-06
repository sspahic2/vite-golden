import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from './slices/AuthenticationSlice'
import userReducer from './slices/UserSlice'
import offerReducer from './slices/OfferSlice'
import reviewReducer from './slices/ReviewSlice'
import favoriteReducer from './slices/FavoriteSlice'
import messageReducer from './slices/MessageSlice'

export const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        user: userReducer,
        offer: offerReducer,
        review: reviewReducer,
        favorite: favoriteReducer,
        message: messageReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;