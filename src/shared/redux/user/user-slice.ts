import { createSlice } from '@reduxjs/toolkit';
import { REDUCERS } from '../../constants/reducers.ts';

const initialState: GUser = {
  id: 0,
  email: '',
  credit: 0,
  created: '',
  updated: '',
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
        isAuthenticated: !!action.payload?.accessToken,
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
