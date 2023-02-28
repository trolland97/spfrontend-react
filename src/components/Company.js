import React from "react";
import companyimg from "../images/company.png";
import { Link } from "react-router-dom";
import './Company.css';
import Button from './Button.js';

function Company() {
    return (
        <>
            <div className="homeContainer">


                <div class="homeImg">
                    <Link to="/" className="company-img">
                        <img src={companyimg} alt="companyImg"></img>
                    </Link>
                </div>
                <div className="companyContainer">
                    <h1 className="titleName">DVG COMPANY</h1>
                    <h2 className="titleProff">Veleprodaja i maloprodaja kozmetike i kucne hemije</h2>
                    <h3 className="titleDesc">
                        DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u
                        Subotici. Prevenstvena delatnost kompanije je veleprodaja kozmetike i
                        kućne hemije. U potpunosti je u privatnom vlasništvu, sa sedištem u
                        Subotici. Tu se nalazi distrubutivni centar i poslovne prostorije, sa
                        ukupno 3000m2 magacinskog prostora koji zadovoljava sve segmente u
                        pogledu smeštaja, čuvanja i plasiranja robe.
                    </h3>
                    <div class="moreBtn">
                        <Button styleClass="company-button" link="#" value="Saznajte više o nama" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Company