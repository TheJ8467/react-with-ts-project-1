import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WindowSliceState } from '../../interfaces/WindowSliceState';

const initialState: WindowSliceState = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    setWindowWidth: (state, action: PayloadAction<number>) => {
      state.windowWidth = action.payload;
    },
    setWindowHeight: (state, action: PayloadAction<number>) => {
      state.windowHeight = action.payload;
    },
  },
});

export const { setWindowWidth, setWindowHeight } = windowSlice.actions;

export const windowReducer = windowSlice.reducer;
