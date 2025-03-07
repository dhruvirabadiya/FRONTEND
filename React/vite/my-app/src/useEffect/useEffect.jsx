import React from 'react'
import { useState, useEffect } from 'react'

// useEffect(setup , dependencies)

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log(`${count} times clicked!!`);
    })

    // useEffect(() => {
    //     console.log(`${count} times clicked!!`);
    // }, [])

    // useEffect(() => {
    //     console.log(`${count} times clicked!!`);
    // }, [count])


    return (
        <div>
            <button className='btn' onClick={() => setCount(count + 1)} >click</button>
            <button className='btn' onClick={() => setNum(num + 1)}>click-1</button>
        </div >

    )
}

export default UseEffect