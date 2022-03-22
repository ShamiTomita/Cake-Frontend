import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <div style={{ borderBottom: '2px solid #4d4dff', background:'#ccccff', paddingBottom: '10px', paddingLeft: '10px', paddingTop:'10px' }}>
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
