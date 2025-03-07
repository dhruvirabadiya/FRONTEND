import React from "react";
import { useState } from "react";
import "../App.css";

const UseState = () => {
  // let initialValue = 20
  // let initialValue = [20, 40]
  //   let initialValue = [{ value: 20 }, { data: 40 }];
  let initialValue = { value: 20, data: 40 };

  // const [state, setState] = useState(initialValue)
  // const [state, setState] = useState(20)
  const [state, setState] = useState(initialValue);
  console.log("state:", state);

  // const handeleIncrement = () => {
  //     setState(state => state + 1)
  // }
  // const handeleIncrement = () => {
  //     setState([state[0] + 1, state[1]])
  // }

  // const handeleIncrement = () => {
  //     setState([state[0] + 1, state[1] - 1])
  // }

  //   const handleDecrement = () => {
  //     setState([state[0], state[1] - 1]);
  //   };

  //   const handeleIncrement = () => {
  //     setState([{ value: state[0].value + 1 }, { data: state[1].data - 1 }]);
  //   };

  // const handeleIncrement=()=>{
  //     setState({value:state.value+1  , data:state.data-1})
  // }

  const handeleIncrement = () => {
    setState((prevstate) => ({ ...prevstate, value: prevstate.value + 1 }));
  };

  const handleDecrement = () => {
    setState((prevstate) => ({ ...prevstate, data: prevstate.data - 1 }));
  };

  return (
    <div>
      <h1 className="headText">This is Usestate component</h1>
      {/* <div className="btn">{state[0]}</div>
      <div className="btn">{state[1]}</div> */}
      <div className="btn">{state.value}</div>
      <div className="btn">{state.data}</div>
      <button onClick={handeleIncrement} className="btn">
        +
      </button>
      <br></br>
      <button onClick={handleDecrement} className="btn">
        -
      </button>
    </div>
  );
};

export default UseState;
