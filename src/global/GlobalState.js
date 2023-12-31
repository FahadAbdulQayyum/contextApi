import { useEffect, useReducer } from 'react'
import globalContext from "./globalContext";
import globalReducer from "./globalReducer";

const GlobalState = props => {

    const initialState = {
        products: []
    }

    useEffect(() => {
        const storedProducts = localStorage.getItem('pd');
        if (storedProducts) {
            console.log('storedProducts', storedProducts)
            console.log('storedProducts', JSON.parse(storedProducts))
            dispatch({
                type: 'LoadProducts',
                payload: JSON.parse(storedProducts),
            });
        }
    }, []);

    const [state, dispatch] = useReducer(globalReducer, initialState)

    const addProduct = data => dispatch({
        type: 'AddProduct', payload: data
    })

    const deleteProduct = id => dispatch({
        type: 'DeleteProduct', payload: id
    })

    // const deleteProduct = id => console.log('iddd', id)

    return <globalContext.Provider
        value={{
            products: state.products,
            addProduct: addProduct,
            deleteProduct: deleteProduct
        }
        }
    >
        {props.children}
    </globalContext.Provider >
}

export default GlobalState