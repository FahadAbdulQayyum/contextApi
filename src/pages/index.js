import React, {
  useState, useContext
} from 'react'

import globalContext from '@/global/globalContext';

const Index = () => {

  const [product, setProduct] = useState()

  const { deleteProduct, addProduct, products } = useContext(globalContext)

  const onFormSubmit = e => {
    e.preventDefault();
    // console.log('e', e.target.value)
    console.log('product', product, new Date().valueOf())
    addProduct({ id: new Date().valueOf(), product })
    setProduct('')
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='text' value={product} placeholder='Enter your product name' onChange={e => setProduct(e.target.value)} />
        <input type='submit' value='Add Product' />
      </form>
      <>
        <ul className="list-disc list-inside">{products?.map(v => <div className='flex justify-between' key={v.id}><li> {v.product}</li><div className='flex justify-between w-28 bg-slate-300'><button onClick={() => deleteProduct(v.id)}>Delete</button><button>Update</button></div></div>).reverse()}</ul >
      </>
    </div >
  )
}

export default Index
