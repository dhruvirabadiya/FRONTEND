import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-evenly bg-purple-700 text-white p-6 text-xl font-bold'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
        <NavLink to='/contactus'>Contact us</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/faq'>Faq</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Navbar
