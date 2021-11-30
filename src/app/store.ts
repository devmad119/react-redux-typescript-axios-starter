import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import errorReducer from 'features/error-slice';
export const store = configureStore({
  reducer: {
    errorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
