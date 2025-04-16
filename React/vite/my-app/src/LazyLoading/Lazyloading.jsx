import React, { Suspense, useEffect, useState } from 'react'

const About = React.lazy(() => import('./About'))

const Lazyloading = () => {
    const [showAbout, setShowAbout] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAbout(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            <div className='headText'>Lazyloading</div>
            <h1>Hello Dhruvi 🌸</h1>

            {/* {showAbout && (<Suspense  fallback={<h2>Loading About....</h2>}>
                <About />
            </Suspense >)} */}
            <Suspense fallback={<h2>Loading About....</h2>}>
                {showAbout ? <About /> : <h2>Loading About...</h2>}
            </Suspense>
        </>
    )
}

export default Lazyloading