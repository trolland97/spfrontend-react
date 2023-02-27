import React from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";
import './Header.css';

function Header() {
    return (
<>
<header className="header">
    
    <div className="header-container">
        <Link to="/" className="header-logo">
            <img src={img} alt="headerlogo"></img>
        </Link>
        <div className="header-elements">
        <ul>
            <li><Link to="/" className="element">Srpski</Link></li>
            <li><Link to="/" className="element">English</Link></li>
            <li><Link to="/" className="element">Magyar</Link></li>
            <button class="darkmodeBtn" onclick="darkMode()">Dark Mode</button>
            </ul>
        </div>
    </div>

    </header>
</>
)
}

export default Header

