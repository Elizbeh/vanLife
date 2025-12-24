import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <NavLink to="/" className='logo'>
            #VANLIFE
        </NavLink>
        <nav>
            <NavLink to="/host" className='navlink'>Host</NavLink>
            <NavLink to="/about" className='navlink'>About</NavLink>
            <NavLink to="/vans" className='navlink'>Vans</NavLink>
        </nav>
    </header>
  )
}

export default Header