import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../ReduxStore';
import { VITE_BASE_URL } from '../../config/routes';

export interface IMessageProps {
    id: string;
    sender_id: string;
    receiver_id: string;
    message: string;
    offer_id: string;
    parent_message_id: string;
    createdAt: boolean;
}

export interface ISendFavoriteProps {
    sender_id?: string;
    receiver_id: string;
    message: string;
    offer_id?: string;
    // parent_message_id: string;
}

export interface IGetAllMessageProps {
    id: string;
    user_id: string;
    message: string;
    offer_id: string;
    parent_message_id: string;
    sentAt: boolean;
    sender_id?: string,
    created_at?: string;
    updated_at?: string;
    receiver_id: string;
    replies?: IGetAllMessageProps[];
}

interface ApiResponse<T> {
    success: boolean;
    data: T;
}


export const sendMessage = createAsyncThunk<IMessageProps, ISendFavoriteProps>(
    'message/sendMessageToPartner',
    async (data, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.post<IMessageProps>(`${VITE_BASE_URL}/send-message`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data) {
                return response.data;
            } else {
                return rejectWithValue(response.data);
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'Error sending message';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('Error sending message');
        }
    }
);

export const replyToMessage = createAsyncThunk<IMessageProps, ISendFavoriteProps>(
    'message/sendMessageToPartner',
    async (data, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.post<IMessageProps>(`${VITE_BASE_URL}/reply-message`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data) {
                return response.data;
            } else {
                return rejectWithValue(response.data);
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'Error sending message';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('Error sending message');
        }
    }
);

// export const getAllMessages = createAsyncThunk<IGetAllMessageProps[], void>(
//     'message/getAllMessages',
//     async (_, { getState, rejectWithValue }) => {
//         try {
//             const state = getState() as RootState;
//             const token = state.authentication.authToken;

//             const response = await axios.get<ApiResponse<IGetAllMessageProps[]>>(`${VITE_BASE_URL}/messages-user`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (response.data) {
//                 return response.data.data;
//             } else {
//                 return rejectWithValue('No data available');
//             }
//         } catch (error: unknown) {
//             if (axios.isAxiosError(error)) {
//                 const errorMessage = error.response?.data || 'Error fetching messages';
//                 return rejectWithValue(errorMessage);
//             }
//             return rejectWithValue('Error fetching messages');
//         }
//     }
// );



// export const getMessageByUser = createAsyncThunk<IGetAllMessageProps[], string>(
//     'message/getAllMessages',
//     async (userId, { getState, rejectWithValue }) => {
//         try {
//             const state = getState() as RootState;
//             const token = state.authentication.authToken;

//             const response = await axios.get<IGetAllMessageProps[]>(`${VITE_BASE_URL}/messages`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//                 params: { user_id: userId },
//             });

//             if (response.data) {
//                 return response.data;
//             } else {
//                 return rejectWithValue('No messages found.');
//             }
//         } catch (error: unknown) {
//             if (axios.isAxiosError(error)) {
//                 const errorMessage = error.response?.data || 'Error fetching messages';
//                 return rejectWithValue(errorMessage);
//             }
//             return rejectWithValue('Error fetching messages');
//         }
//     }
// );



export const getAllMessages = createAsyncThunk<IGetAllMessageProps[], void>(
    'message/getAllMessages',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.get<ApiResponse<IGetAllMessageProps[]>>(`${VITE_BASE_URL}/messages-user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data) {
                return response.data.data;
            } else {
                return rejectWithValue('No data available');
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'Error fetching messages';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('Error fetching messages');
        }
    }
);

export const getAllMessagesPartner = createAsyncThunk<IGetAllMessageProps[], void>(
    'message/getMessagesPartner',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState() as RootState;
            const token = state.authentication.authToken;

            const response = await axios.get<ApiResponse<IGetAllMessageProps[]>>(`${VITE_BASE_URL}/messages-partner`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data) {
                return response.data.data;
            } else {
                return rejectWithValue('No data available');
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || 'Error fetching messages';
                return rejectWithValue(errorMessage);
            }
            return rejectWithValue('Error fetching messages');
        }
    }
);



const initialState = {
    loading: true,
    error: null as string | null,
    message: null as IMessageProps | null,
    isSendMessage: false,
    messages: [] as IGetAllMessageProps[],
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        clearSendStatus: (state) => {
            state.isSendMessage = false;
        },
        clearCreatedError: (state) => {
            state.error = null as string | null;
        },
        resetIsSendMessage: (state) => {
            state.isSendMessage = false;
        },

    },
    extraReducers: (builder) => {
        builder
            // send message to partner
            .addCase(sendMessage.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isSendMessage = false;
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.message = action.payload;
                state.isSendMessage = true;
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
                state.isSendMessage = false;
            })

            // get all messages
            .addCase(getAllMessages.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isSendMessage = false;
            })
            .addCase(getAllMessages.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.messages = action.payload;
                state.isSendMessage = true;
            })
            .addCase(getAllMessages.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
                state.isSendMessage = false;
            })

            // get all messages partner
            .addCase(getAllMessagesPartner.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isSendMessage = false;
            })
            .addCase(getAllMessagesPartner.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.messages = action.payload;
                state.isSendMessage = true;
            })
            .addCase(getAllMessagesPartner.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
                state.isSendMessage = false;
            })

        // .addCase(getMessageByUser.pending, (state) => {
        //     state.loading = true;
        //     state.error = null;
        //     state.isSendMessage = false;
        // })
        // .addCase(getMessageByUser.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.error = null;
        //     state.messages = action.payload;
        //     state.isSendMessage = true;
        // })
        // .addCase(getMessageByUser.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = typeof action.payload === 'string' ? action.payload : 'Füllen Sie das Formular korrekt aus';
        //     state.isSendMessage = false;
        // })


    },
});


export const { clearSendStatus, clearCreatedError, resetIsSendMessage } = messageSlice.actions;

export default messageSlice.reducer;


