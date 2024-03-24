import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';

const Dashboard = () => {

  return (
    <nav className='navbar'>
        <div className='container'>
            <h3 className='logo'> HydroFarm </h3>

            <ul className= 'nav-links'>
                <Link to='/'> <li>Home</li></Link>
                <Link to='/dashboard'> <li>Dashboard</li></Link>
                <Link to='/contact'> <li>Contact</li></Link>
            </ul>
            <span className='navbar-text'>
              <HashLink to='/tutorial'>
                <button className='vvd'><span>Tutorial</span></button>
              </HashLink>
            </span>

        </div>
    </nav>
  )
}

export default Dashboard;