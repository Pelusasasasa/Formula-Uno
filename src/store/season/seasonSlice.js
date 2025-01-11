import { createSlice } from '@reduxjs/toolkit';

export const seasonSlice = createSlice({
    name: 'season',
    initialState: {
        seasons: [],
        active: '',
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

            state.active = payload[0];
            state.seasons = payload;
            state.isLoading = false;
        },
        setActive: (state, {payload}) => {
            state.active = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { getSeason, loading, setActive } = seasonSlice.actions;