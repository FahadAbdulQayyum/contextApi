import React from 'react'
import ProductsList from '../../products.json'
import ProductItem from './productItem'

import Style from './product.module.css'

const Products = () => {
    return (
        <div className={Style.main}>
            {
                ProductsList.map(v => <ProductItem items={v} />)
            }
        </div>
    )
}

export default Products
