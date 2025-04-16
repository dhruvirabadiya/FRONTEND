import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './Product/ProductReducer'

const store = configureStore({
    reducer: {
        product: ProductReducer
    }
})

export default store