import React from "react";
import AboutUs from '../json/about.json';




function About() {
    return (
        <>
            <div className="nameContainer">
                <span className="name">DVG COMPANY</span>
                <span className="secondName">u brojkama</span>
            </div>
            <div className="aboutContainer">
                {
                    AboutUs && AboutUs.map(about => {
                        return (

                            <div className="aboutElement">
                                <span className="firstspan">{about.title}<span className="secondspan">{about.secondtitle}</span></span>
                                <span   className="aboutdesc">{about.description}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default About