import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
function Header() {
    return (
        <>
            <ul>
  <li><NavLink className="active" to="/">Home</NavLink></li>
  <li><NavLink to="/ADD">ADD</NavLink></li>
  <li><NavLink href="#contact">Contact</NavLink></li>
  <li><NavLink href="#about">About</NavLink></li>
</ul>

            
        </>
    );
}

export default Header;