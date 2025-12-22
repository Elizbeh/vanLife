import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header'>
        <Link to="/" className='logo'>
            <h1 >#VANLIFE</h1>
        </Link>
        <nav>
            <Link to="/about" className='navlink'>About</Link>
            <Link to="/vans" className='navlink'>Vans</Link>
        </nav>
    </header>
  )
}

export default Navbar