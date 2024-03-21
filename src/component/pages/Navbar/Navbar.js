import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(true)


  return (
    <nav className='navbar'>
        <div className='container'>
            <h3 className='logo'> Logo </h3>

            <ul className={Mobile? 'nav-links-mobile': 'nav-links'} onClick={() => setMobile(false)}>
                <Link to='/'> <li>Home</li></Link>
                <Link to='/tutorial'> <li>Tutorial</li></Link>
                <Link to='/dashboard'> <li>Dashboard</li></Link>
            </ul>
            <button className='mobile-menu-icon'>
                {Mobile? <ImCross/>: <FaBars /> }
            </button>
        </div>
    </nav>
  )
}

export default Navbar;
