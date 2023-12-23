import React, { useState } from 'react'
import Products from '../../products.json'

const Index = () => {

    const [prod, setProd] = useState({})

    const addBtn = v => {
        const prd = { ...Products, quantity: v.quantity++ }
        setProd(prd)
    }

    return (
        <div
            className='bg-orange-400 text-white'
        >
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
        </div>
    )
}

export default Index
