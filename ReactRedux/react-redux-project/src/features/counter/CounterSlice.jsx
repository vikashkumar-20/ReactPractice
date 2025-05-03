import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        }, 
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        incrementByAmount: (state, action) => {
            // Defensive coding to avoid NaN
            const incrementValue = Number(action.payload) || 0;
            state.value += incrementValue;
        }
    }
});

// Exporting the actions
export const { increment, decrement, reset, incrementByAmount } = CounterSlice.actions;

// Exporting the reducer
export default CounterSlice.reducer;
