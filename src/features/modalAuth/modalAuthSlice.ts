import { createSlice } from '@reduxjs/toolkit';

export const modalAuthSlice = createSlice({
  name: "modal",
  initialState: {
    value: false
  },
  reducers: {
    setModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setModal } = modalAuthSlice.actions;

export default modalAuthSlice.reducer;
