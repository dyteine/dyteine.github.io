import './styles/main.css'

import HomePage from './pages/Home.jsx'
import ProjectsPage from './pages/Projects.jsx'
import ContactPage from './pages/Contact.jsx'
import PageTransition from './components/PageTransition.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav className='p-4 bg-[#EFFFCF] flex flex-row gap-[20px]'>
        <NavLink
          to="/"
          end
          className={({ isActive }) => `
            relative font-bold transition-colors duration-300 ease-in-out 
            after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] 
            after:bg-green-500 after:origin-center after:transition-transform after:duration-300 
            ${isActive
              ? 'text-green-500 after:scale-x-100'
            : 'text-green-800 hover:text-green-500 after:scale-x-0 hover:after:scale-x-100'
            }
          `.replace(/\s+/g, ' ').trim()}
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => `
            relative font-bold transition-colors duration-300 ease-in-out 
            after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] 
            after:bg-green-500 after:origin-center after:transition-transform after:duration-300 
            ${isActive
              ? 'text-green-500 after:scale-x-100'
            : 'text-green-800 hover:text-green-500 after:scale-x-0 hover:after:scale-x-100'
            }
          `.replace(/\s+/g, ' ').trim()}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `
            relative font-bold transition-colors duration-300 ease-in-out 
            after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] 
            after:bg-green-500 after:origin-center after:transition-transform after:duration-300 
            ${isActive
              ? 'text-green-500 after:scale-x-100'
              : 'text-green-800 hover:text-green-500 after:scale-x-0 hover:after:scale-x-100'
            }
          `.replace(/\s+/g, ' ').trim()}
        >
          Contact
        </NavLink>
      </nav>
      <PageTransition>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  </React.StrictMode>,
)