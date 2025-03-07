import React from 'react'

const UseState2 = ({ state, func1, func2 }) => {
    return (
        <>
            <h1 className='headText'>This is UseState2 Component</h1>
            <div className='btn'>{state}</div>
            <button className='btn' onClick={func1}>increment</button>
            <br></br>
            <button className='btn' onClick={func2}>decrement</button>
        </>

    )
}

export default UseState2