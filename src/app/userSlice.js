import { createSlice } from '@reduxjs/toolkit';

const initialState = { userInfo: {}, userID: null };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            state.userInfo = action.payload;
            state.userID = action.payload.userId;
        },
    },
});

export const { saveUser } = userSlice.actions;

export const getUser = (state) => state.user;
export default userSlice.reducer;
