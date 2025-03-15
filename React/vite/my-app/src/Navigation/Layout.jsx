import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Login from './Login'
import Faq from './Faq'
import Error from './Error'
import Shop from './Shop'
import OldProduct from './OldProduct'
import NewProduct from './NewProduct'
import SingleProduct from './SingleProduct'
import Navbar from '../Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'

// const routers = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navbar />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/aboutus',
//         element: <AboutUs />
//       },
//       {
//         path: '/contactus',
//         element: <ContactUs />
//       },
//       {
//         path: '/login',
//         element: <Login />
//       },
//       {
//         path: '/faq',
//         element: <Faq />
//       },
//       {
//         path: '/shop',
//         element: <Shop />,
//         children: [
//           { path: 'oldpro', element: <OldProduct /> },
//           { path: 'newpro', element: <NewProduct /> }
//         ]
//       },
//       {
//         path: '*', element: <Error />
//       }
//     ]
//   }
// ])

const routers = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='contactus' element={<ContactUs />} />
      <Route path='login' element={<Login />} />
      <Route path='faq' element={<Faq />} />
      <Route path='shop' element={<Shop />}>
        <Route path='oldpro' element={<OldProduct />} />
        <Route path='newpro' element={<NewProduct />} />
      </Route>
      <Route path='shop/:id' element={<SingleProduct />} />
      <Route path='*' element={<Error />} />
    </Route>

  )
)

const Layout = () => {
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/aboutus' element={<AboutUs />}></Route>
          <Route path='/contactus' element={<ContactUs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/shop' element={<Shop />}>
            <Route path='/shop/oldpro' element={<OldProduct />}></Route>
            <Route path='/shop/newpro' element={<NewProduct />}></Route>
          </Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter > */}
    </div >
  )
}

export default Layout
