import { createSlice } from '@reduxjs/toolkit';
import { REDUCERS } from "../../constants/reducers.ts";

const initialState: GApp = {
    darkMode: true
};

const appSlice = createSlice({
    name: REDUCERS.APP,
    initialState,
    reducers: {
        toggleDarkMode: (state, action) => {
            state.darkMode = action.payload || !state.darkMode;
        }
    }
});

export const {
    toggleDarkMode,
} = appSlice.actions;

export default appSlice.reducer;
