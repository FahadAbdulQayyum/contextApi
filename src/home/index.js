import React, { useEffect, useState } from 'react'
import Products from '../../products.json'

const Index = () => {

    const [prod, setProd] = useState({})

    useEffect(() => {
        const prd = JSON.parse(localStorage.getItem('addToCart'))
        console.log('prddd', prd)
        setProd(prd)
    }, [])

    const addBtn = v => {
        // const prd = JSON.stringify(localStorage.getItem('addToCart')) !== null ? JSON.stringify(localStorage.getItem('addToCart')) : { ...Products, quantity: v.quantity++ }
        // const prd = JSON.parse(localStorage.getItem('addToCart')) !== null ? JSON.parse(localStorage.getItem('addToCart')) : { ...Products, quantity: v.quantity++ }
        // const prd = JSON.parse(localStorage.getItem('addToCart'))
        // console.log('prddd', prd)
        // const prd = { ...Products, quantity: v.quantity++ }
        // setProd(prd)
        // localStorage.setItem('addToCart', JSON.parse(prd))
        localStorage.setItem('addToCart', JSON.stringify(prd))
    }

    return (
        <div
            className='bg-orange-400 text-white'
        >
            {/* {prod && prod?.map(v => <div */}
            {Products.map(v => <div
                key={v.id}
                className='flex py-1'
            >
                <p>{v.name}</p>
                <button
                    className='bg-slate-500 py-1 px-2 ml-5 hover:scale-105 transition-transform'
                    onClick={() => addBtn(v)}
                >Add to Cart - {v.quantity}</button>
            </div>)
            }
        </div >
    )
}

export default Index
