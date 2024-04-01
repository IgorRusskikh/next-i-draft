import modalAuthSlice from '@/features/modalAuth/modalAuthSlice';
import modalCreateTaskSlice from '@/features/modalCreateTask/modalCreateTaskSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    modalAuth: modalAuthSlice,
    modalCreateTask: modalCreateTaskSlice,
  },
});
