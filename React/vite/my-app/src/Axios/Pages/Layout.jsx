import React from 'react'
import Home from './Home'
import Shop from './Shop'
import Navbar from '../Component/Navbar'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
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