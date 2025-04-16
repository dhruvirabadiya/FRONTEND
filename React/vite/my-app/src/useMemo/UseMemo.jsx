import React, { useMemo } from 'react'
import { useState } from 'react'

const UseMemo = () => {
    const [pizzaCount, setPizzaCount] = useState(0);

    const totalPrice = useMemo(() => {
        console.log("Calculating total price...");
        return pizzaCount * 150
    }, [pizzaCount])
    return (
        <>
            <h2>🍕 Pizza Ordered: {pizzaCount}</h2>
            <h3>💰 Total Price: ₹{totalPrice}</h3>
            <button className="btn" onClick={() => setPizzaCount(pizzaCount + 1)}>Add Pizza</button>

        </>
    )
}

export default UseMemo