import { createSlice } from '@reduxjs/toolkit';

export const rankingsSlice = createSlice({
    name: 'rankings',
    initialState: {
        practice1: [],
        Q1: [],
        Q2: [],
        Q3: [],
    },
    reducers: {
        setPractice1: (state, {payload}) =>{
            state.practice1 = payload;
        },
        setQ1: (state,{ payload } ) => {
            state.Q1 = payload
        },
        setQ2: (state,{ payload } ) => {
            state.Q2 = payload
        },
        setQ3: (state,{ payload } ) => {
            state.Q3 = payload
        },
    }
});


// Action creators are generated for each case reducer function
export const { setPractice1, setQ1, setQ2, setQ3 } = rankingsSlice.actions;