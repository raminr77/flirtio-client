import { createSlice } from '@reduxjs/toolkit';
import { REDUCERS } from "../../constants/reducers.ts";


const initialState: GUser = {
    email: '',
    credit: 0,
    picture: '',
    lastName: '',
    firstName: '',
    isAuthenticated: false
};

const userSlice = createSlice({
    name: REDUCERS.USER,
    initialState,
    reducers: {
        userLoginAction: (_, action) => {
            return {
                credit: 3,
                isAuthenticated: true,
                ...(action.payload || {})
            };
        },
        userLogoutAction: () => {
            return initialState;
        }
    }
});

export const { userLogoutAction, userLoginAction } = userSlice.actions;

export default userSlice.reducer;
