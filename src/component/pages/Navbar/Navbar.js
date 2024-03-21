import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='container'>
            <h3 className='logo'> Logo </h3>

            <ul className='nav-links'>
                <Link to='/'> <li>Home</li></Link>
                <Link to='/tutorial'> <li>Tutorial</li></Link>
                <Link to='/dashboard'> <li>Dashboard</li></Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
