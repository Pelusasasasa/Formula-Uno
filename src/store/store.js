import { configureStore } from '@reduxjs/toolkit';
import { seasonSlice } from './season/seasonSlice';

export const store = configureStore({
    reducer: {
        seasons: seasonSlice.reducer
    }
})