import { configureStore } from '@reduxjs/toolkit';
import slice from './slice';

const store = configureStore({
  reducer: {
    porto: slice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
