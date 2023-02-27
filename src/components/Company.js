import React from "react";
import companyimg from "../images/company.png";
import { Link } from "react-router-dom";
import './Company.css';

function Company() {
    return (
        <>
            <company className="company">

                <div className="company-container">
                    <Link to="/" className="company-img">
                        <img src={companyimg} alt="companyImg"></img>
                    </Link>
                    <div className="company-elements">
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
                            <a href="/" className="btnInfo">Saznajte više o nama</a>
                        </div>
                    </div>
                </div>

            </company>
        </>
    )
}

export default Company