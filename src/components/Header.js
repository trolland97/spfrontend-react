import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";
import './Header.css';

function Header() {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
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
                            <button onClick={toggleTheme}>Dark Mode</button>
                        </ul>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;

