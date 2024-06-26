import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: "modalCreateTask",
  initialState: {
    value: false,
  },
  reducers: {
    setModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
