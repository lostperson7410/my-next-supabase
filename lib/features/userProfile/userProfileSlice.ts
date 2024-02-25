import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    user: Array<any>;
}

const initialState: UserState = {
    user: [],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string[]>) => {
            state.user = action.payload;
        },
    },
});

export const { setUser,} = userSlice.actions;

export const selectUser = (state: { user: any; }) => state.user.user;


export default userSlice.reducer;