import { createSlice } from '@reduxjs/toolkit';
import { REDUCERS } from '../../constants/reducers.ts';

const initialState: GApp = {
  darkMode: true,
  activeModal: null
};

const appSlice = createSlice({
  name: REDUCERS.APP,
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload || !state.darkMode;
    },
    showModal: (state, action) => {
      state.activeModal = action.payload || null;
    },
    hideModals: (state) => {
      state.activeModal = null;
    }
  }
});

export const { showModal, hideModals, toggleDarkMode } = appSlice.actions;

export default appSlice.reducer;
