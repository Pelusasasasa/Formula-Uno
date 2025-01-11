import { createSlice } from '@reduxjs/toolkit';

export const racesSlice = createSlice({
    name: 'races',
    initialState: {
        race: {},
        races: [],
        isLoading: false
    },
    reducers: {
        loading: (state) => {
            state.isLoading= true;
        },
        setActive: (state, {payload}) => {
            console.log(payload)
            state.race = payload;
            state.isLoading = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { loading, setActive } = racesSlice.actions;