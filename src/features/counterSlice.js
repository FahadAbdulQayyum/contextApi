// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: [{ id: 0, name: 'Tomatoes', qnty: 1 }, { id: 1, name: 'Potatoes', qnty: 1 },] },
    reducers: {
        increment: (state, action) => {
            // state.value += 1;
            // state.value.push(1)
            // state.value[0].qnty += 1

            // state.value[action.payload].qnty += 1

            state.value.find(v => v.id === action.payload).qnty += 1
        },
        // decrement: (state) => {
        decrement: (state, action) => {
            // state.value -= 1;
            state.value.find(v => v.id === action.payload).qnty -= 1
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
