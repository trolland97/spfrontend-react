import React from "react";
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import './Distribution.css';

function Distribution() {
    return (
        <>
            <distribution className="distribution-container">
                <div className="dImages">
                    <img src={img1} alt="distribution1" />
                    <span className="description">POSTANITE NAŠ PARTNER</span>
                </div>

                <div className="dImages">
                    <img src={img2} alt="distribution2" />
                    <span className="description">NAŠI PROIZVODI</span>
                </div>

                <div className="dImages">
                    <img src={img3} alt="distribution3" />
                    <span className="description">NAŠI PROIZVODI</span>
                </div>

            </distribution>
        </>
    )
}

export default Distribution