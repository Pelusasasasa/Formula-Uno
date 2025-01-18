import { configureStore } from '@reduxjs/toolkit';
import { seasonSlice } from './season/seasonSlice';
import { racesSlice } from './races/racesSlice';
import { rankingsSlice } from './rankings/rankingSlice';
import { driverSlice } from './driver/driverSlice';

export const store = configureStore({
    reducer: {
        races: racesSlice.reducer,
        rankings: rankingsSlice.reducer,
        seasons: seasonSlice.reducer,
        driver: driverSlice.reducer
    }
})