import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import logo from '../images/productslogo.png';

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    imageurl:
      "/product-images/card1.png",
    name: "KESE I FOLIJE",
  },
  {
    id: 2,
    imageurl:
      "/product-images/card2.png",
    name: "ZA KUHINJU",
  },
  {
    id: 3,
    imageurl:
      "/product-images/card3.png",
    name: "UBRUSI I TOALET PAPIRI",
  },
  {
    id: 4,
    imageurl:
      "/product-images/card4.png",
    name: "KOZMETIKA",
  },
  {
    id: 5,
    imageurl:
      "/product-images/card5.png",
    name: "PLASTICNE KANTE",
  },
  {
    id: 5,
    imageurl:
      "/product-images/card5.png",
    name: "PLASTICNE KANTE",
  },
  {
    id: 5,
    imageurl:
      "/product-images/card5.png",
    name: "PLASTICNE KANTE",
  },
  {
    id: 5,
    imageurl:
      "/product-images/card5.png",
    name: "PLASTICNE KANTE",
  }
];


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
