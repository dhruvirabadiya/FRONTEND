import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-evenly bg-purple-700 text-white p-6 text-xl font-bold'>
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>About Us</Link>
        <Link to='/contactus'>Contact us</Link>
        <Link to='/login'>Login</Link>
        <Link to='/faq'>Faq</Link>
      </nav>
    </div>
  )
}

export default Navbar
