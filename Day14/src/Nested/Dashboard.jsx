import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h2>Dashboard Component</h2>
        <nav>
            <NavLink to="profile" className={({isActive}) => isActive ? "active-link" : "link"}>Profile</NavLink>
            <NavLink to="setting" className={({isActive}) => isActive ? "active-link" : "link"}>Setting</NavLink>
        </nav>
        <hr></hr>
        <Outlet />   
        {/* profile and settings are rendered here */}
    </div>
  )
}

export default Dashboard