import React, { useEffect, useState } from 'react'
import Products from '../../products.json'

const Index = () => {

    // const [prod, setProd] = useState({})
    // const [prod, setProd] = useState([...Products])
    const [prod, setProd] = useState()

    // let prd = JSON.parse(localStorage.getItem('addToCart'))
    // let prdd = Products

    // let prdd = prd ? JSON.parse(localStorage.getItem('addToCart')) : prdd


    useEffect(() => {
        let prd = JSON.parse(localStorage.getItem('addToCart'))
        // console.log('prddd', [prd].filter(v => console.log('vv', v)))
        console.log('prddd', prd?.filter(v => console.log('vv', v)))
        // console.log('prddd-', [prd])
        console.log('prddd-', prd)

        // prdd = prd ? JSON.parse(localStorage.getItem('addToCart')) : prdd

        // setProd(prd ? JSON.parse(localStorage.getItem('addToCart')) : prdd)
        setProd(prd ? JSON.parse(localStorage.getItem('addToCart')) : Products)

        // prd ? setProd([prd]) : setProd(Products)

        // prd ? setProd(prd) : setProd(prdd)

        // prd ? setProd(prd) : setProd(Products)
        // setProd(prd)
    }, [])

    const addBtn = v => {
        // const prd = JSON.stringify(localStorage.getItem('addToCart')) !== null ? JSON.stringify(localStorage.getItem('addToCart')) : { ...Products, quantity: v.quantity++ }
        // const prd = JSON.parse(localStorage.getItem('addToCart')) !== null ? JSON.parse(localStorage.getItem('addToCart')) : { ...Products, quantity: v.quantity++ }
        // const prd = JSON.parse(localStorage.getItem('addToCart'))
        // console.log('prddd', prd)
        // const prd = { ...Products, quantity: v.quantity++ }

        // prdd = { ...prdd, quantity: v.quantity++ }
        // prdd = [...prdd, v.quantity++]
        // let prdd = [...Products, v.quantity++]

        // let prdd = [...prod, v.quantity++]
        const updatedProducts = prod.map(pd => {
            if (pd.id === v.id) {
                console.log('pdddd', pd)
                return {
                    ...pd,
                    quantity: pd.quantity + 1
                }
            }
            return pd;
        })
        // console.log('prodd', prdd)
        console.log('updatedProducts', updatedProducts)
        // setProd(prdd)
        setProd(updatedProducts)
        // localStorage.setItem('addToCart', JSON.parse(prd))
        // localStorage.setItem('addToCart', JSON.stringify(prd))
        // localStorage.setItem('addToCart', JSON.stringify([prdd]))
        // localStorage.setItem('addToCart', JSON.stringify(prdd))
        localStorage.setItem('addToCart', JSON.stringify(updatedProducts))
        // localStorage.setItem('addToCart', prd)
        // localStorage.setItem('addToCart', JSON.parse(prd))
    }

    return (
        <div
            className='bg-orange-400 text-white'
        >
            {/* {prod && prod?.map(v => <div */}
            {/* {prod && prod?.map(v => <div */}
            {/* {Products.map(v => <div */}
            {/* {prdd.map(v => <div */}
            {/* {prod?.map(v => (typeof v === 'object' && <div */}
            {prod?.map(v => <div
                key={v.id}
                className='flex py-1'
            >
                <p>{v.name}</p>
                {/* <p>{console.log('v.name', typeof v === 'object')}</p> */}
                <button
                    className='bg-slate-500 py-1 px-2 ml-5 hover:scale-105 transition-transform'
                    onClick={() => addBtn(v)}
                >Add to Cart - {v?.quantity}</button>
            </div>)
            }
        </div >
    )
}

export default Index
