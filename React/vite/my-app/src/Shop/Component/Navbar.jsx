import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='flex justify-evenly items-center bg-purple-700 text-white p-6 text-xl font-bold'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>AboutUS </Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </nav>
      <main className='mt-4'>
        <Outlet />
      </main>
    </div>
  )
}

export default Navbar
