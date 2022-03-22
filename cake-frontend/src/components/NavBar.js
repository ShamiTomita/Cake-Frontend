import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/home"
      >
        <button className="nav-button">Home</button>
      </NavLink>
      <p>hi</p>
    </div>
    </>
  );
}
export default NavBar
