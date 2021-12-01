import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import isEmpty from 'validation/is-empty';

interface AuthState {
  isAuthenticated: boolean;
  currentUser: any;
}

const initialState: AuthState = {
  isAuthenticated: false,
  currentUser: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCurrentUser: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = !isEmpty(action.payload);
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;

export default authSlice.reducer;
