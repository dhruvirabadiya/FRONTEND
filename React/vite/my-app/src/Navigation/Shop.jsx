import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Shop = () => {
    return (
        <div>
            <h1 className='headText'>Shop page</h1>
            <nav className='flex justify-evenly bg-purple-700 text-white p-6 text-xl font-bold'>
                <Link to="/shop/oldpro">Old Product</Link>
                <Link to="/shop/newpro">New Product</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div >
    )
}

export default Shop