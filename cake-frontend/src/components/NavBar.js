import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          
          <NavLink to='/browse' activeStyle>
            Browse
          </NavLink>
    </>
  );
};

export default Navbar;
