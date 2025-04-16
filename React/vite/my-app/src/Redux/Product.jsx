import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './Product/ProductAction'

const Product = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products);
    return (
        <div>
            <button className='btn' onClick={() => dispatch(addProduct({ id: 1, name: "Kurti" }))}>Add Product</button>
            {
                products.map(p => (<p key={p.id}>{p.name}</p>))
            }
        </div >
    )
}

export default Product