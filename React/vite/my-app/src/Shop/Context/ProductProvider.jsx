import React, { useReducer, useState } from 'react'
import ProductContext from './ProductContext'
import CartReducer from './CartReducer'

const ProductProvider = ({ children }) => {

    const [Product, setProduct] = useState([])
    const [CartProduct, dispatch] = useReducer(CartReducer, [])

    return (
        <div>
            <ProductContext.Provider value={{ Product, setProduct, CartProduct, dispatch }}>
                {children}
            </ProductContext.Provider>
        </div>
    )
}

export default ProductProvider