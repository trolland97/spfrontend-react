import React from 'react';
import './Navbar.css';

const navbar= () =>{
  return (
  <div className='navbar-elements'>
    <li>
      <a href='/'>O NAMA</a>
      <span className='element-desc'>vizija za uspeh</span>
    </li>
    <li>
    <a href='/'>DVG PROIZVODI</a>
    <span className='element-desc'>nasi proizvodi</span>
    </li>
    <li>
    <a href='/'>BRENDOVI</a>
    <span className='element-desc'>koje zasupamo</span>
    </li>
    <li>
    <a href='/'>DISTRIBUCIJA</a>
    <span className='element-desc'>logistika i operativa</span>
    </li>
    <li>
    <a href='/'>SARADNJA</a>
    <span className='element-desc'>prosirenje ponude</span>
    </li>
    <li>
    <a href='/'>NOVOSTI</a>
    <span className='element-desc'>aktuelnosti</span>
    </li>
    <li>
    <a href='/'>KONTAKT</a>
    <span className='element-desc'>kontaktirajte nas</span>
    </li>
  </div>
  );
}
export default navbar;