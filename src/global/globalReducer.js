const globalReducer = (state, action) => {
    switch (action.type) {
        case 'LoadProducts': {
            return {
                ...state,
                products: [...action.payload]
            }
        }
        case 'AddProduct':
            console.log('add Product reducer called')
            return {
                ...state,
                products: [...state.products, action.payload],
                ls: localStorage.setItem('pd', JSON.stringify([...state.products, action.payload]))
            }
        case 'DeleteProduct':
            console.log('DeleteProduct function called')
            return {
                ...state,
                products: state.products.filter(v => v.id !== action.payload),
                ls: localStorage.setItem('pd', JSON.stringify([...state.products.filter(v => v.id !== action.payload)]))
            }
        case 'UpdateProduct':
            console.log('UpdateProduct function called')
            return {
                ...state,
                // update: true,
                update: action.payload,
                // updateValue: console.log('state.products.filter(v => v.id === action.payload)', state.products.filter(v => v.id === action.payload)),
                updateValue: state.products.filter(v => v.id === action.payload),
                // updateValue: action.payload,
                // products: state.products.filter(v => v.id !== action.payload),
                // ls: localStorage.setItem('pd', JSON.stringify([...state.products.filter(v => v.id !== action.payload)]))
            }
        case 'UpdateValueProduct':
            console.log('UpdateValueProduct function called', action.payload)
            const filteredProducts = state.products.filter(v => v.id === state.update)
            const updateProduct = {
                ...filteredProducts[0], product: action.payload
            }
            console.log('updateProduct', updateProduct)
            const productUpdated = [...state.products.filter(v => v.id !== state.update), updateProduct]
            console.log('productUpdated', productUpdated)

            // const productUpdated = [...state.products.filter(v => updateProduct)]
            // const productUpdated = [...state.products.filter(v => v !== state.update)]
            return {
                ...state,
                products: productUpdated,
                update: false,
                // update: action.payload,
                // // updateValue: console.log('state.products.filter(v => v.id === action.payload)', state.products.filter(v => v.id === action.payload)),
                // updateValue: state.products.filter(v => v.id === action.payload),
                // updateValue: null,
                // // products: state.products.filter(v => v.id !== action.payload),
                ls: localStorage.setItem('pd', JSON.stringify([...productUpdated]))
            }
        default: return { ...state }
    }
}

export default globalReducer;