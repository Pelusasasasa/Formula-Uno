import { createSlice } from '@reduxjs/toolkit';

export const seasonSlice = createSlice({
    name: 'season',
    initialState: {
        seasons: [],
        acive: {},
        isLoading: false
    },
    reducers: {
        loading: (state) => {
            state.isLoading = true
        },
        getSeason: (state, {payload}) => {
            payload.sort((a, b) => {
                if( a> b){
                    return -1;
                }
            });

            state.seasons = payload;
            state.isLoading = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { getSeason, loading } = seasonSlice.actions;