import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { KeyboardSliceState } from '../../interfaces/KeyboardSliceState';

const initialState: KeyboardSliceState = {
  keyboardInput: '',
  layout: 'default',
  placeholder: 'Tap on the virtual keyboard to start',
};

// Fetching, adding user. It was created eariler, it will be built more soon.
const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    setKeyboardInput: (state, action: PayloadAction<string>) => {
      state.keyboardInput = action.payload;
    },
    setLayout: (state, action: PayloadAction<string>) => {
      state.layout = action.payload;
    },
    setPlaceholder: (state, action: PayloadAction<string>) => {
      state.placeholder = action.payload;
    },
  },
});

export const { setKeyboardInput, setLayout, setPlaceholder } =
  keyboardSlice.actions;

export const keyboardReducer = keyboardSlice.reducer;
