import React, {
  useState, useContext
} from 'react'

import globalContext from '@/global/globalContext';

const Index = () => {

  const [product, setProduct] = useState()

  const { addProduct, products } = useContext(globalContext)

  const onFormSubmit = e => {
    e.preventDefault();
    // console.log('e', e.target.value)
    console.log('product', product)
    addProduct({ product })
    setProduct('')
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='text' value={product} placeholder='Enter your product name' onChange={e => setProduct(e.target.value)} />
        <input type='submit' value='Add Product' />
      </form>
      {/* <>{products?.map(v => <>{v.product}</>)}</> */}
      <>
        <ul className="list-disc list-inside">{products?.map(v => <li>{v.product}</li>)}</ul>
      </>
    </div>
  )
}

export default Index
