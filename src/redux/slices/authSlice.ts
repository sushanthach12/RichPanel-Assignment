import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    userID: string;
    accessToken: string;
    expiresIn: number;
    graphDomain: string;
    status: "connected" | "disconnected";
}

const initialState: InitialState | null = {
    userID: "",
    accessToken: "",
    expiresIn: 0,
    graphDomain: "",
    status: "disconnected"
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticate: (state, action: PayloadAction<any>) => {
            const payload = action.payload;
            state.userID = payload.userID
            state.accessToken = payload.accessToken
            state.expiresIn = payload.expiresIn
            state.graphDomain = payload.graphDomain
            state.status = "connected"
        }
    }
});

export const getAuth = (state:any) => state.auth

export const { authenticate } = authSlice.actions

export default authSlice.reducer;