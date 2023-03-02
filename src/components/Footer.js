import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../images/Frame.png";

function Footer() {
    return (
        <>
            <div className="footerContainer">
                <div className="footerContents">
                    <Link to="/" className="header-logo">
                        <img src={footerlogo} alt="footerlogo"></img>
                    </Link>
                    <div className="footerContacts">
                        <span className="footerCompanyName">D.V.G. COMPANY</span>
                        <div className="contacts">
                            <i className="fa-solid fa-location-dot"></i>
                            <a href="/">Čantavirski put bb 24000 Subotica, Srbija</a>
                        </div>
                        <div className="contacts">
                            <i className="fa-solid fa-phone"></i>
                            <a href="tel:+38124568555">+381 24 568 555</a>
                        </div>
                        <div className="contacts">
                            <i className="fa-regular fa-envelope"></i>
                            <a href="mailto: office@dvgcompany.com">office@dvgcompany.com</a>
                        </div>
                    </div>
                    <div className="footerNavbar">
                        <a href="/">O NAMA</a>
                        <a href="/">DVG PROIZVODI</a>
                        <a href="/">BRENDOVI</a>
                        <a href="/">DISTRIBUCIJA</a>
                        <a href="/">SARADNJA</a>
                        <a href="/">NOVOSTI</a>
                        <a href="/">KONTAKT</a>
                    </div>
                    <div className="footerSocialmedia">
                        <span>Pratite nas:</span>
                        <div className="smlogos">
                            <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="/"><i className="fa-brands fa-twitter" ></i></a>
                            <a href="/"><i className="fa-brands fa-youtube" ></i></a>
                            <a href="/"><i className="fa-brands fa-facebook-messenger"></i></a>
                        </div>
                    </div>
                </div>
                <div className="copyrightContent">
                    <div className="copyright">
                        <span>Copyright @ 2021 DVG Company, Subotica d.o.o. Sva prava zadrzana</span>
                        <a href="/">Privatnost podataka</a>
                        <a href="/">Uslovi koriscenja</a>
                        <span>Powered by: <a href="/">Studio Present</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer