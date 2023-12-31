import React, {
  useState, useContext, useEffect
} from 'react'

import globalContext from '@/global/globalContext';

const Index = () => {

  const [product, setProduct] = useState()
  const [updatedValue, setUpdatedValue] = useState()

  const { submitProduct, updateValue, update, updateProduct, deleteProduct, addProduct, products } = useContext(globalContext)

  useEffect(() => {
    setUpdatedValue(updateValue[0]?.product)
  }, [update])

  const onFormSubmit = e => {
    e.preventDefault();
    // console.log('e', e.target.value)
    console.log('product', product, new Date().valueOf())
    addProduct({ id: new Date().valueOf(), product })
    setProduct('')
  }

  return (
    <div className='mx-5 my-3'>
      <form onSubmit={onFormSubmit}>
        <input type='text' value={product} placeholder='Enter your product name' onChange={e => setProduct(e.target.value)} className='border p-2' />
        <input type='submit' value='Add Product' className='p-2 bg-orange-400 rounded text-white ml-2' />
      </form>
      <>
        <ul className="list-disc list-inside">{products?.map(v => <div className={`flex justify-between bg-orange-300 my-1 ${update === v.id ? 'bg-stone-800 text-white' : 'bg-orange-300'}`} key={v.id} ><li className='flex'> {update !== v.id ? <p>{v.product}</p> : <input type='text' value={updatedValue} onChange={e => setUpdatedValue(e.target.value)} placeholder='Enter your update' className='text-black' />}</li><div className='flex justify-between w-28 bg-slate-300'><button onClick={() => deleteProduct(v.id)}>Delete</button><button onClick={() => updateProduct(v.id)}>Update</button><button onClick={() => submitProduct(updatedValue)}>Submit</button></div></div>).reverse()}</ul >
      </>
    </div >
  )
}

export default Index
