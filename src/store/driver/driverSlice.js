import { createSlice } from '@reduxjs/toolkit';

export const driverSlice = createSlice({
    name: 'driver',
    initialState: {
        driver: {},
        isLoadingDriver: false,
        driverStats: {}
    },
    reducers: {
        setLoading: (state) => {
            state.isLoadingDriver = true
        },
        setDriver: (state, {payload}) => {
            console.log(payload)
            state.driver = payload;
        },
        setStats: (state, {payload}) => {
            console.log(payload)
            state.driverStats = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setLoading, setDriver, setStats } = driverSlice.actions;