import React, { useCallback, useState } from 'react'
import ProductCard from './ProductCard'

const UseCallback = () => {
    const [count, setCount] = useState(0)

    const handlAddtocart = useCallback(() => {
        setCount(count + 1);
    }, [count])

    // const handlAddtocart = () => {
    //     setCount(count + 1);
    // }
    return (
        <>
            <div className='headText'>UseCallback</div>
            <h2>🛒 Cart: {count}</h2>
            <ProductCard onAdd={handlAddtocart} />
        </>
    )
}

export default UseCallback