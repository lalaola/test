import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';

const NavHome = () => {
    return (
        <div className='nav-home mx-auto d-flex justify-content-center align-items-center'>
          <div className="col-12 d-flex  justify-content-center">
            <h1>Hello Welcome</h1>
            <NavLink to='/homepage' className="btn btn-light ms-4 pt-3" href="#"> Lets'go</NavLink>
          </div>
        </div>
    );
}

export default NavHome;
