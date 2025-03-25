import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colors } from "../../lib/constants/colors";


export interface userState {
    userId : (string |undefined),
    userName : (string | undefined),
    userColor : (string | undefined),
};

const initialState : userState = {
    userId : undefined,
    userName : undefined,
    userColor : colors.blue,
};


export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        login : (state, action : PayloadAction<userState>) => {
            state.userId = action.payload.userId,
            state.userName = action.payload.userName,
            state.userColor = action.payload.userColor
        },
        logout : (state) => {
            state.userId = undefined,
            state.userName = undefined,
            state.userColor = colors.blue
        }
    }
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;

