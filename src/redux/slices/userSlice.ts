import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    userID: string;
    name: string
}

const initialState: InitialState | null = {
    userID: "",
    name: ""
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<any>) => {
            const payload = action.payload;
            state.userID = payload.id
            state.name = payload.name
        }
    }
});

export const getUser = (state:any) => state.user

export const { addUser } = userSlice.actions

export default userSlice.reducer;