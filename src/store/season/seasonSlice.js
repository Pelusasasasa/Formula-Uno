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
        }
    }
});


// Action creators are generated for each case reducer function
export const { loading } = seasonSlice.actions;