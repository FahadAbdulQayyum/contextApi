import React, { useEffect, useState } from 'react'
import Products from '../../../products.json'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, showValue } from '../../features/counter/counterSlice'


const Index = () => {

    const [prod, setProd] = useState()
    const [qnty, setQnty] = useState()

    // const count = useSelector((state) => state.counter.value)
    const count = useSelector((state) => state.counter.Products)
    console.log('counttt', count)
    let qty = count?.reduce((a, b) => a + b.quantity, 0)
    const dispatch = useDispatch()

    useEffect(() => {
        let prd = JSON.parse(localStorage.getItem('addToCart'))
        setProd(prd ? JSON.parse(localStorage.getItem('addToCart')) : Products)

        // let a = prod?.reduce((v, b) => v + b.quantity, 0)
        let a = prd?.reduce((v, b) => v + b.quantity, 0)
        // let aaa = dispatch(showValue())
        // console.log('aaa', a, dispatch)
        // console.log('aaa', a, aaa)

        console.log('aaa', a, count)
        setQnty(a)
    }, [])

    return (
        <div
            className='border p-1'
        >
            <div
                className='bg-violet-600 text-white px-5 py-2 rounded shadow-lg'
            // className='text-violet-600 px-5 py-2 rounded shadow-md'
            // className='text-violet-600 px-5 py-2 rounded shadow-2xl'
            // className='text-violet-600 px-5 py-2 rounded shadow-inner'
            // className='text-violet-600 px-5 py-2 rounded shadow-inner hover:shadow-md'
            >
                FLOATING-DATA
            </div>
            <div
                className='text-violet-600 px-5 py-1 rounded shadow-inner hover:shadow-md'
            >
                {/* {prod?.reduce((v, b) => v.quantity + b, 0)} */}
                {/* {prod?.map(v => console.log('vvv', v.quantity))} */}

                {/* {prod?.reduce((v, b) => console.log('vvv', v?.quantity))} */}

                {/* {let a = prod?.reduce((v, b) => v?.quantity + b, 0)} */}

                {/* {qnty} */}
                {/* {count} */}
                {qty}
            </div>
        </div>
    )
}

export default Index
