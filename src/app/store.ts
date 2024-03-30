import modalSlice from '@/features/modal/modalSlice';
import modalCreateTaskSlice from '@/features/modalCreateTask/modalCreateTaskSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    modal: modalSlice,
    modalCreateTask: modalCreateTaskSlice,
  },
});
