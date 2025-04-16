import { Add_Product } from './ProductConstant'

const initailstate = {
    products: []
}
const ProductReducer = (state = initailstate, action) => {
    switch (action.type) {
        case Add_Product:
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        default:
            console.log('state...', state);
            return state;
    }
};

export default ProductReducer