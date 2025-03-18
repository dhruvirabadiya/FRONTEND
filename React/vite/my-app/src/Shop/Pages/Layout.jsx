import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Profile from './Profile'
import Shop from './Shop'
import Cart from './Cart'
import Error from './Error'
import Navbar from '../Component/Navbar'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<Error />} />
    </Route >
  )
)

const Layout = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default Layout
