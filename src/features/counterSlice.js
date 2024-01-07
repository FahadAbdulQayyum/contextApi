// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: [{ name: 'Tomatoes', qnty: 1 }, { name: 'Potatoes', qnty: 1 },] },
    reducers: {
        increment: (state, action) => {
            // state.value += 1;
            // state.value.push(1)
            // state.value[0].qnty += 1
            state.value[action.payload].qnty += 1
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
