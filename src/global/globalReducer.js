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
        default: return { ...state }
    }
}

export default globalReducer;