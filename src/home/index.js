import React, { useState } from 'react'
import Products from '../../products.json'

const Index = () => {

    const [prod, setProd] = useState({})
    // const [prod, setProd] = useState()

    const addBtn = v => {
        const prd = { ...Products, quantity: v.quantity++ }
        // setProd({ ...prd })
        setProd(prd)
        // console.log('vv', prd)
    }

    return (
        <div
            className='bg-orange-400 text-white'
        >
            <h1>AsSalam-O-Alaikum</h1>
            {/* <div
                className='flex bg-violet-400'
            >
                <p>Onion</p>
                <button
                    className='bg-slate-500 py-1 px-2 ml-5'
                >Add to Cart</button>
            </div>
            <div
                className='flex bg-red-500'
            >
                <p>Tomato</p>
                <button
                    className='bg-slate-500 py-1 px-2 ml-5'
                >Add to Cart</button>
            </div> */}
            {Products.map(v => <div
                className='flex py-1'
            >
                <p>{v.name}</p>
                <button
                    className='bg-slate-500 py-1 px-2 ml-5 hover:scale-105 transition-transform'
                    onClick={() => addBtn(v)}
                >Add to Cart - {v.quantity}</button>
                {/* // >Add to Cart - {console.log('prod.quantity', prod.quantity)}</button> */}
                {/* >Add to Cart - {prod.quantity}</button> */}
                {/* // >Add to Cart - {prd[v.id]?.quantity}</button> */}
                {/* // >Add to Cart - {console.log('prod.quantity', prod)}</button> */}
                {/* >Add to Cart - {console.log('prod.quantity', prod)}</button> */}
            </div>)
            }
        </div >
    )
}

export default Index
