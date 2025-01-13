import { createSlice } from '@reduxjs/toolkit';

export const racesSlice = createSlice({
    name: 'races',
    initialState: {
        race: {},
        races: [],
        sprintRace: [],
        firstQ1: [],
        firstQ2: [],
        firstQ3: [],
        isLoading: false
    },
    reducers: {
        loading: (state) => {
            state.isLoading= true;
        },
        setActive: (state, {payload}) => {

            state.race = payload;
            state.isLoading = false;
        },
        setRaces: (state, {payload}) => {
            state.races = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { loading, setActive, setRaces } = racesSlice.actions;