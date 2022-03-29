import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className="navbar" >
          <div className="nav">
          <NavLink to='/' activeStyle>
          Home
          </NavLink>
          </div>
          <div className="nav">
          <NavLink to='/browse' activeStyle>
          Browse
          </NavLink>
          </div>
          <div className="nav">
          <NavLink to='/browse' activeStyle>
          Current Orders
          </NavLink>
          </div>
          <div className="nav">
          <NavLink to='/browse' activeStyle>
          History
          </NavLink>
          </div>
        </div>
    </>
  );
};

export default Navbar;
