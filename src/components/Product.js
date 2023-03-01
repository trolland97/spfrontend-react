import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="productimage" />
      <span>{props.name}</span>
    </div>
  );
}