import React from "react";
import Products from '../json/elements.json';
import Button from './Button.js';




function Brands() {
    return (
        <>
            <div className="brandContainer">
                <div className="brandTitle">
                    <span>Istaknuti brendovi za koje radimo distribuciju</span>
                </div>
                <div className="brandsCard">
                    {
                        Products && Products.map(element => {
                            return (
                                <div className="brands">
                                    <img src={element.image} alt="brandslogo" />
                                    <span className="brandDesc">{element.description}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <Button styleClass="brands-button" link="#" value="Svi brendovi u nasem portfoliju" />
            </div>

        </>
    )
}

export default Brands