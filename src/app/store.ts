import modalSlice from '@/features/modal/modalSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    modal: modalSlice,
  },
});
