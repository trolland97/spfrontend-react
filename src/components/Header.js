import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../images/logo.png';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function darkmodeFunction() {
    const name = document.querySelector(".nameContainer");
    const brand = document.querySelector(".brandContainer");
    const distribution = document.querySelector(".distributionContainer");
    const navbar = document.querySelector(".navbar-elements")
    const header = document.querySelector(".navbar");
    const company = document.querySelector(".homeContainer");
    const cardslider = document.querySelector(".productsContainer");

    distribution.classList.toggle("dark-mode");
    name.classList.toggle("dark-mode");
    brand.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    company.classList.toggle("dark-mode");
    cardslider.classList.toggle("dark-mode");
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={img} alt='logo' />
          </Link>
          <div className='languages'>
            <ul>
              <li>
                <span>Magyar</span>
                <span>Srpski</span>
                <span>English</span>
                <span onClick={darkmodeFunction}><i className="fa-sharp fa-solid fa-moon"></i>DARK MODE</span>
              </li>
            </ul>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                O NAMA
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                DVG PROIZVODI
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                BRENDOVI
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                DISTRIBUCIJA
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                SARADNJA
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                NOVOSTI
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                KONTAKT
              </Link>
            </li>
            <li className='drop_buttons'>
              <span onClick={closeMobileMenu}>Magyar</span>
              <span onClick={closeMobileMenu}>Srpski</span>
              <span onClick={closeMobileMenu}>English</span>
              <span onClick={() => { closeMobileMenu(); darkmodeFunction(); }}><i className="fa-sharp fa-solid fa-moon"></i>DARK MODE</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;