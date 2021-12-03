import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface MenuState {
  selectedIndex: number;
}

const initialState: MenuState = {
  selectedIndex: 0,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSelectedIndex: (state, action: PayloadAction<number>) => {
      state.selectedIndex = action.payload;
    },
  },
});

export const { setSelectedIndex } = menuSlice.actions;

export const selectIndex = (state: RootState) => state.menu.selectedIndex;

export default menuSlice.reducer;
