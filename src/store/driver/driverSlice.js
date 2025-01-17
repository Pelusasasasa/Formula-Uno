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
            state.driver = payload;
        },
        setStats: (state, {payload}) => {
            state.driverStats = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setLoading, setDriver, setStats } = driverSlice.actions;