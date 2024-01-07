import React, {
  useState, useContext, useEffect
} from 'react'

// import globalContext from '@/global/globalContext';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

const Index = () => {

  const [product, setProduct] = useState()
  const [updatedValue, setUpdatedValue] = useState()

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  // const { submitProduct, updateValue, update, updateProduct, deleteProduct, addProduct, products } = useContext(globalContext)

  // useEffect(() => {
  //   setUpdatedValue(updateValue[0]?.product)
  // }, [update])

  const onFormSubmit = e => {
    e.preventDefault();
    // addProduct({ id: new Date().valueOf(), product })
    setProduct('')
  }

  return (
    <div className='mx-5 my-3'>
      {/* <form onSubmit={onFormSubmit}>
        <input type='text' value={product} placeholder='Enter your product name' onChange={e => setProduct(e.target.value)} className='border p-2' />
        <input type='submit' value='Add Product' className='p-2 bg-orange-400 rounded text-white ml-2' />
      </form>
      <>
        <ul className="list-disc list-inside">{products?.map(v => <div className={`flex justify-between bg-orange-300 my-1 ${update === v.id ? 'bg-stone-800 text-white' : 'bg-orange-300'}`} key={v.id} ><li className='flex'> {update !== v.id ? <p>{v.product}</p> : <input type='text' value={updatedValue} onChange={e => setUpdatedValue(e.target.value)} placeholder='Enter your update' className='text-black' />}</li><div className='flex justify-between w-28 bg-slate-300'><button onClick={() => deleteProduct(v.id)}>Delete</button><button onClick={() => updateProduct(v.id)}>Update</button><button onClick={() => submitProduct(updatedValue)}>Submit</button></div></div>).reverse()}</ul >
      </> */}

      {/* <input type='submit' value='Increment' className='p-2 bg-orange-400 rounded text-white ml-2' onClick={() => dispatch(increment())} /> */}
      <input type='submit' value='Increment' className='p-2 bg-orange-400 rounded text-white ml-2' onClick={() => dispatch(increment(1))} />
      {/* <p>Counter: {counter}</p> */}
      <p>Counter: {console.log('counter', counter)}</p>
      <input type='submit' value='Decrement' className='p-2 bg-orange-400 rounded text-white ml-2' onClick={() => dispatch(decrement(1))} />

    </div>
  )
}

export default Index
