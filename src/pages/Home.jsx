import DyteineLogo from '../assets/dyteine-catto-logo.png'

import { useState } from 'react'
import { MousePointer, Shield, Sparkles } from 'lucide-react'

export default function Home() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <div className="home-container">
            <div className="hero opacity-0 animate-entrance">
                <img src={DyteineLogo} className='mx-auto w-48 h-48 select-none' draggable={false} alt="Dyteine Logo" />
            </div>

            <div className="intro opacity-0 animate-entrance [animation-delay:150ms]">
                <h1>Hi! I'm</h1>
                <h1>Dwight Dwayne Yu</h1>

                <div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative overflow-hidden px-6 py-2.5 rounded-full font-bold bg-green-900 text-[#CDFF64] w-fit mx-auto my-4 cursor-default shadow-sm border border-green-800"
                >
                    <div
                        className="absolute pointer-events-none transition-opacity duration-300 -inset-px rounded-full"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            background: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 197, 94, 0.35), transparent 80%)`,
                        }}
                    />
                    <span className="relative z-10 select-none">dyteine</span>
                </div>

                <p className="flex justify-center items-center gap-4 text-sm font-medium">
                    <span className="relative group cursor-pointer transition-colors duration-300 hover:text-green-500">
                        ARS
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-1.5 bg-white text-[#08060d] text-xs font-normal rounded-lg shadow-xl border border-gray-200 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 flex items-center gap-2 whitespace-nowrap z-20">
                            <Sparkles size={14} className="text-green-500" />
                            <span>Form and function unified.</span>
                        </span>
                    </span>

                    <span>•</span>

                    <span className="relative group cursor-pointer transition-colors duration-300 hover:text-green-500">
                        SECVRITAS
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-1.5 bg-white text-[#08060d] text-xs font-normal rounded-lg shadow-xl border border-gray-200 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 flex items-center gap-2 whitespace-nowrap z-20">
                            <Shield size={14} className="text-green-500" />
                            <span>Security that puts you first.</span>
                        </span>
                    </span>

                    <span>•</span>

                    <span className="relative group cursor-pointer transition-colors duration-300 hover:text-green-500">
                        CLARITAS
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 px-3 py-1.5 bg-white text-[#08060d] text-xs font-normal rounded-lg shadow-xl border border-gray-200 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 flex items-center gap-2 whitespace-nowrap z-20">
                            <MousePointer size={14} className="text-green-500" />
                            <span>Shaping experience through data.</span>
                        </span>
                    </span>
                </p>
            </div>
        </div>
    )
}