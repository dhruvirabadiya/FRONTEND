import { React, useContext } from 'react'
import ProductContext from '../Context/ProductContext'

const Cart = () => {

  const { CartProduct, dispatch } = useContext(ProductContext)

  return (
    <div>
      <h1 className='headtext'>Cart Page</h1>
      {CartProduct.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-wrap gap-6 mt-6">
          {CartProduct.map(item => (
            <div key={item.id} className="w-84">
              <div className="max-w-sm rounded-lg shadow-xl shadow-gray-400 p-4">
                <img
                  className="rounded-t-lg h-72 w-100"
                  src={item.image}
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Price: ${item.price}
                  </p>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800"
                  >
                    REMOVE FROM CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart
