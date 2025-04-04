import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../Redux/Action'

const Home = () => {

  // const data = useSelector(state => state)
  // const data = useSelector(state => state.cake)
  // const { cake, choco } = useSelector(state => state)
  // const dispatch = useDispatch()
  // console.log(cake);
  // console.log(choco);

  // const data = useSelector(state => state[0])

  // const data = useSelector(state => state)
  // const dispatch = useDispatch()
  // console.log('data..', data);

  const data1 = useSelector(state => state.reducer1)
  const data2 = useSelector(state => state.reducer2)

  const dispatch = useDispatch()
  console.log(data1);
  console.log(data2);


  return (
    <div>
      <h1 className='headText'>This is Home Page</h1>
      {/* <div className='btn'>{data}</div>
      <button className='btn' onClick={() => dispatch(increment())}>Increment</button>
      <button className='btn' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='btn' onClick={() => dispatch(reset())}>Reset</button> */}
      {/* <div className='btn'>Cake Count: {data.cake}</div> */}

      {/* <div className='btn'>Cake Count: {data[0].cake}</div>

      <button className='btn' onClick={() => dispatch(increment('cake'))}>Increment Cake</button>
      <br></br>
      <button className='btn' onClick={() => dispatch(decrement('cake'))}>Decrement Cake</button>
      <br></br> */}
      {/* <div className='btn'>Choco Count: {data.choco}</div> */}
      {/* <div className='btn'>Choco Count: {data[1].choco}</div>
      <button className='btn' onClick={() => dispatch(increment('choco'))}>Increment Choco</button>
      <br></br>
      <button className='btn' onClick={() => dispatch(decrement('choco'))}>Decrement Choco</button>
      <br></br>
      <button className='btn' onClick={() => dispatch(reset())}>Reset</button> */}

      <div className='btn'>{data1}</div>
      <div className='btn'>{data2}</div>
      <button className='btn' onClick={() => dispatch(increment())}>Increment</button>
      <button className='btn' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='btn' onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Home
