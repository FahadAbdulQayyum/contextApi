// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        // Add other reducers here if needed
    },
});

export default store;