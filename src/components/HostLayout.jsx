import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function HostLayout() {

  const activeStyles = {
     fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616"
  }
  return (
    <>
    <nav className='host-layout-links'>
        <NavLink 
          to="."
          end
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Dashboard
        </NavLink>
        <NavLink to="income" className="navlink">Income</NavLink>
        <NavLink to="vans" className="navlink">Vans</NavLink>
        <NavLink to="reviews" className="navlink">Reviews
</NavLink>
    </nav>
    {<Outlet/>}
    </>
  )
}

export default HostLayout