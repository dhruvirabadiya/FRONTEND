import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-evenly bg-purple-800 p-6 text-white'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                </ul>
            </nav>
            <main className='mt-4'>
                <Outlet />
            </main>
        </div>
    )
}

export default Navbar