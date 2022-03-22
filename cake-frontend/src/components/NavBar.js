import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <>
    <div style={{ borderBottom: '2px solid #4d4dff', background:'#ccccff', paddingBottom: '10px', paddingLeft: '10px', paddingTop:'10px' }}>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/home"
      >
        <button className="nav-button">Home</button>
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/users"
      >
        <button className="nav-button">Users</button>
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/logout"
      >
        <button className="nav-button">Logout</button>
      </NavLink>
    </div>
    </>
  );
}
export default NavBar
