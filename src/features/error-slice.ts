import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'app/store';

export interface ErrorState {
  error: any;
}

// Define the initial state using that type
const initialState: ErrorState = {
  error: null,
};

export const errorSlice = createSlice({
  name: 'error',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
  },
});

export const { getError, clearError } = errorSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectError = (state: RootState) => state.errorReducer.error;

export default errorSlice.reducer;
