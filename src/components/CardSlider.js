import React from "react";
import "./CardSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./product_data";
import logo from '../images/productslogo.png';

export default function CardSlider() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
    />
  ));

  return (
    <div className="productsContainer">
      <div class="productsTitle">
            <span>Nasi proizvodi</span>
        </div>
        <div class="productsDesc"><span>Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna
                nega lica i tela. Uspeli smo da uskladimo kvalitet i cenu, što su prepoznali i naši kupci.</span></div>
    <div className="CardSlider">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
    <div class="productsLogo">
      <img src={logo} alt='productlogo' />
        </div>
    </div>
  );
}
