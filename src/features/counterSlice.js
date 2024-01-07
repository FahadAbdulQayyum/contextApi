// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: [{ name: 'Tomato', quantity: 1 }, { name: 'Potatoes', quantity: 1 }] },
    reducers: {
        increment: (state, action) => {
            // Check if action.payload is a valid index
            const index = action.payload;
            if (index >= 0 && index < state.value.length) {
                console.log('==', state)
                state.value[index].quantity += 1;
            }
        },
        decrement: (state, action) => {
            // Check if action.payload is a valid index
            const index = action.payload;
            if (index >= 0 && index < state.value.length) {
                state.value[index].quantity -= 1;
            }
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;





// // src/features/counterSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//     name: 'counter',
//     // initialState: { value: 0 },
//     initialState: { value: [{ name: 'Tomato', quantity: 1 }, { name: 'Potatoes', quantity: 1 }] },
//     reducers: {
//         // increment: (state) => {
//         increment: (state, action) => {
//             // state.value += 1;
//             state.value[action.payload].quantity += 1;
//         },
//         // decrement: (state) => {
//         decrement: (state, action) => {
//             // state.value -= 1;
//             state.value[action.payload].quantity -= 1;
//         },
//     },
// });

// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;
