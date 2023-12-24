import React, { useEffect, useState } from 'react'
import Products from '../../products.json'

import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'
import { decrement, increment, incrementQuantity } from '../features/counter/counterSlice'

const Index = () => {

    const [prod, setProd] = useState()

    // const count = useSelector((state) => state.counter.value)
    const count = useSelector((state) => state.counter.Products)
    // const count = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        let prd = JSON.parse(localStorage.getItem('addToCart'))
        setProd(prd ? JSON.parse(localStorage.getItem('addToCart')) : Products)
    }, [])

    const addBtn = v => {
        const updatedProducts = prod.map(pd => pd.id === v.id ? {
            ...pd,
            quantity: pd.quantity + 1
        } : pd
        )
        setProd(updatedProducts)

        localStorage.setItem('addToCart', JSON.stringify(updatedProducts))

        // **************************************

        // dispatch(increment())
    }

    const btnn = () => {
        console.log('countcount', count)
    }

    return (
        <div
            className='bg-orange-400 text-white'
        >

            {/* {prod?.map(v => <div */}
            {count?.map(v => <div
                key={v.id}
                className='flex py-1'
            >
                <p>{v.name}</p>
                <button
                    className='bg-slate-500 py-1 px-2 ml-5 hover:scale-105 transition-transform'
                    // onClick={() => addBtn(v)}
                    // onClick={() => dispatch(increment())}
                    onClick={() => (dispatch(incrementQuantity(v)), btnn())}
                // onClick={() => (dispatch(increment()), btnn())}
                // onClick={() => dispatch(incrementQuantity(v))}
                // > Add to Cart - {console.log('countcount', count)}</button>
                >Add to Cart - {v?.quantity}</button>
                {/* >Add to Cart - {count}</button> */}
            </div >)
            }
        </div >
    )
}

export default Index
