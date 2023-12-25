'use client'

import { createSlice } from '@reduxjs/toolkit'
import Products from '../../../Products.json'
import { useEffect, useState } from 'react'
import SaveData from '@/savedData/saveData'
import GetData from '@/savedData/getData'
// import { GetData } from '@/savedData/getData'

// let pd = []

// const [pdd, setPdd] = useState([])

// useEffect(() => {
//     let pd = JSON.parse(localStorage.getItem('addToCart')) !== null ? JSON.parse(localStorage.getItem('addToCart')) : Products
//     setPdd(pd)

// }, [])

const initialState = {
    c: console.log('GetData()', Boolean(GetData())),
    value: 0,
    // ...Products
    // Products: pdd
    // Products
    // Products: GetData() !== "undefined" ? GetData() : Products
    // Products: GetData() !== null ? GetData() : Products
    // Products: Boolean(GetData()) ? GetData() : Products
    Products: GetData() ? GetData() : Products
    // Products: JSON.parse(localStorage.getItem('addToCart')) !== null ? JSON.parse(localStorage.getItem('addToCart')) : Products
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

            // localStorage.setItem('addToCart', JSON.stringify(state.Products))
            SaveData(state.Products)
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