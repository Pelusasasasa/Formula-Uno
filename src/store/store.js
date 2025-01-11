import { configureStore } from '@reduxjs/toolkit';
import { seasonSlice } from './season/seasonSlice';
import { racesSlice } from './races/racesSlice';

export const store = configureStore({
    reducer: {
        races: racesSlice.reducer,
        seasons: seasonSlice.reducer
    }
})