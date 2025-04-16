import React from 'react'

const ProductCard = ({ onAdd }) => {
    console.log("ProductCard re-rendered");

    return (
        <>
            <div>ProductCard</div>
            <h3>Product: Kurti</h3>
            <button className='btn' onClick={onAdd}>Add to Cart</button>
        </>
    )
}

export default React.memo(ProductCard)