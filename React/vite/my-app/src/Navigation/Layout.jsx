import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Login from './Login'
import Faq from './Faq'
import Error from './Error'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
