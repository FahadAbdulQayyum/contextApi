import React, { useEffect, useState } from 'react'
import Products from '../../products.json'

const Index = () => {

    const [prod, setProd] = useState()

    useEffect(() => {
        let prd = JSON.parse(localStorage.getItem('addToCart'))
        setProd(prd ? JSON.parse(localStorage.getItem('addToCart')) : Products)
    }, [])

    const addBtn = v => {
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
        console.log('updatedProducts', updatedProducts)
        setProd(updatedProducts)
        localStorage.setItem('addToCart', JSON.stringify(updatedProducts))
    }

    return (
        <div
            className='bg-orange-400 text-white'
        >

            {prod?.map(v => <div
                key={v.id}
                className='flex py-1'
            >
                <p>{v.name}</p>
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
