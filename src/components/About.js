import React from "react";
import './About.css';




function About() {
    return (
        <>
            <div className="nameContainer">
                <span className="name">DVG COMPANY</span>
                <span className="secondName">u brojkama</span>
            </div>
            <div className="aboutContainer">
                <div className="aboutElement">
                    <span className="firstspan">3000<span className="secondspan">㎡</span></span>
                    <span>Magacinskog prostora</span>
                </div>
                <div className="aboutElement">
                    <span className="firstspan">20</span>
                    <span>vozila</span>
                </div>
                <div className="aboutElement">
                    <span className="firstspan">8</span>
                    <span>komercijalista</span>
                </div>
                <div className="aboutElement">
                    <span className="firstspan">170</span>
                    <span>Brendova</span>
                </div>
            </div>
        </>
    )
}

export default About