import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Shop = () => {
    const [product, setProduct] = useState([])
    console.log('Product:', product);

    useEffect(() => {
        return async () => {
            try {
                let response = await fetch(`https://fakestoreapi.com/products/`)
                let data = await response.json()
                setProduct(data)
            } catch (error) {
                console.log(error);
            }
        }
    }, [])

    return (
        <div>
            <h1 className="headtext">Shop Page</h1>
            <nav>
                <Link to="/shop/oldpro">OldProduct</Link>
                <Link to="/shop/newpro">NewProduct</Link>
            </nav>
            <section className="flex flex-wrap justify-between gap-8 container mx-auto">
                {product.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="flex flex-wrap -m-4">
                                <div className="p-4 w-96">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img
                                            className="sm:h-96 w-full object-center"
                                            src={item.image}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                CATEGORY
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                The Catalyzer
                                            </h1>
                                            <p className="leading-relaxed mb-3">
                                                Photo booth fam kinfolk cold-pressed sriracha leggings
                                                jianbing microdosing tousled waistcoat.
                                            </p>
                                            <div className="flex items-center flex-wrap ">
                                                <Link to={`/shop/${item.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                    Learn More
                                                    <svg
                                                        className="w-4 h-4 ml-2"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M5 12h14" />
                                                        <path d="M12 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                        <circle cx={12} cy={12} r={3} />
                                                    </svg>
                                                    1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                                    </svg>
                                                    6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Shop