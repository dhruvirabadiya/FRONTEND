import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import store from './Shop/Redux/Store.jsx'
// import { Provider } from 'react-redux'
// import store from './Redux/Store.jsx'
// import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}>
    
    </Provider> */}

    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <App />
  </StrictMode>
)
