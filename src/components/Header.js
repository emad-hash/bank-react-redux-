import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
function Header() {
    return (
        <>
            <ul>
  <li><NavLink class="active" href="#home">Home</NavLink></li>
  <li><NavLink href="#news">News</NavLink></li>
  <li><NavLink href="#contact">Contact</NavLink></li>
  <li><NavLink href="#about">About</NavLink></li>
</ul>

            
        </>
    );
}

export default Header;