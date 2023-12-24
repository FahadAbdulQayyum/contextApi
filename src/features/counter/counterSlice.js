import { createSlice } from '@reduxjs/toolkit'
import Products from '../../../Products.json'

const initialState = {
    value: 0,
    // ...Products
    Products
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // state.Products.quantity

            console.log('-v-||', state)

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        incrementQuantity: (state, action) => {
            // console.log('state,action', state, action)

            // console.log('state,action', state, action.payload.quantity)

            // state.Products.map(v => v.id === action.payload.id ? v.quantity += action.payload.quantity : v)

            // state.Products.map(v => v.id === action.payload.id ? v.quantity += 1 : v)

            // state.Products.map(v => v.id === action.payload.id ? v.quantity + 1 : v)
            state.Products.map(v => v.id === action.payload.id ? { ...v, quantity: v.quantity += 1 } : v)

            state.Products.map(v => console.log('v.id === action.payload.id', v.id, action.payload.id, v.quantity))

            // state.Products.map(v => console.log('-v-', v))
            console.log('-v-', state)

            // state.value += action.payload

            console.log('state,action', state, action.payload.quantity)

        },
        // showValue: (state) => {
        //     console.log('state', state.value)
        //     return state.value
        // }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, showValue, incrementQuantity } = counterSlice.actions

export default counterSlice.reducer