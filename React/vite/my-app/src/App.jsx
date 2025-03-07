import './App.css'
// import Profile from "./problem-solve"
// import Gallery from "./problem-solve"
// import Myfunction from "./problem-solve"

// import Profile from "./profile"
// import Gallery from "./gallery"

// import { Profile } from "./profile"
// import { Gallery } from "./gallery"

// import Props from "./react-props/props"

// import ListProduct from "./listproduct"
// import Cart from "./conditionalrender.jsx/cart"

// import ListRendering from "./conditionalrender.jsx/listrender"

// import Cup from "./purefunction/purefun"

// import { useState } from 'react'
// import UseState from "./usestate/useState"
// import UseState2 from './usestate/useState2'
// import Form from './usestate/form'

import UseEffect from './useEffect/useEffect'
import ProductData from './useEffect/productData'


// import { ThemeProvider, useTheme } from "./useContext/themeContext"
// import ThemeToggle from "./useContext/themeToggle"

// import Layout from './Navigation/layout'



function App() {
  // const [state, setState] = useState(0)
  // const handleIncrement = () => {
  //   setState(state + 1)
  // }

  // const handleDecrement = () => {
  //   setState(state - 1)
  // }
  return (
    <>
      {/* <Layout/> */}
      {/* <Profile />
      <Gallery /> */}
      {/* <Myfunction /> */}
      {/* <Profile />
      <Gallery /> */}
      {/* <Props />
      <ListProduct/>
      <Cart/> */}
      {/* <ListRendering/> */}
      {/* <h1 className="headText">This is Heading tag</h1>
      <Cup guest={1} />
      <br></br>
      <Cup guest={2} /> */}
      {/* <UseState /> */}
      {/* <UseState2 state={state} func1={handleIncrement} func2={handleDecrement} />
      <h1 className='headText'>This is App Component</h1> */}
      {/* <Form /> */}
      {/* <ThemeProvider>
        <MainContent />
      </ThemeProvider> */}
      {/* <UseEffect /> */}
      <ProductData/>

    </>
  )
}

// const MainContent = () => {
//   const { theme } = useTheme();

//   return (
//     <div className={`app ${theme}`}>
//       <h1>This is {theme} mode</h1>
//       <ThemeToggle />
//     </div>
//   );
// };

export default App
