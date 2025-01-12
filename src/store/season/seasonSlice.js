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
            let aux = [...payload];
            aux = aux.reverse();

            state.active = aux[0];
            state.seasons = aux;
            state.isLoading = false;
        },
        setActive: (state, {payload}) => {
            state.active = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { getSeason, loading, setActive } = seasonSlice.actions;