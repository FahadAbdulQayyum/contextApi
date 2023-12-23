import Image from 'next/image'
import React from 'react'
// import './product.module.css'
import Style from './product.module.css'
import Link from 'next/link'

const ProductItem = ({ items }) => {
    return (
        <div>
            <div
                className={Style.imgContainer}
            >
                <Link href={`products/${items.id}`}>
                    <span className={Style.centeredText}>
                        {items.name}
                        {' - Rs ' + items.price + '/='}
                    </span>
                    <Image
                        className={Style.imgSelf}
                        src={items.url}
                        width={500} // Set a suitable width
                        height={500} // Set a suitable height
                        alt={items.name} // Provide alt text for accessibility
                    />
                </Link>
            </div>
        </div>
    )
}

export default ProductItem
