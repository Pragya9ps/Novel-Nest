import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }

  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
      
      <div className='headline'>
          <h1 className='welcome'>
            Welcome to NovelNest !!
          </h1>
          </div>
          
        
        <div className='navbar-container'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <img src='logo1.png' className='logo'></img>
            </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                My Books
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Collections
              </Link>
            </li>

            <li>
              <Link
                to='/form'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <input className='navbar-search' type="text" placeholder='  SEARCH BOOKS . . .' />

          {button && <Button buttonStyle='btn--outline'><Link to='/form' className='navlink'>SIGN UP</Link></Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;