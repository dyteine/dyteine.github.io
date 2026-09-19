import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
    const location = useLocation()
    const [displayLocation, setDisplayLocation] = useState(location)
    const [transitioning, setTransitioning] = useState(false)

    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            setTransitioning(true)
            const timer = setTimeout(() => {
                setDisplayLocation(location)
                setTransitioning(false)
            }, 150)

            return () => clearTimeout(timer)
        }
    }, [location, displayLocation])

    return (
        <div
            className={`transition-opacity duration-300 ease-in-out ${transitioning ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
                }`}
        >
            {children}
        </div>
    )
}