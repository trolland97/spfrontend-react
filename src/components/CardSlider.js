import React from "react";
import "./CardSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./product_data";

export default function CardSlider() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
    />
  ));

  return (
    <div className="CardSlider">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
