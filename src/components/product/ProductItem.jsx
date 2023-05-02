import React from "react";
import "./Product.css";

export default function ProductItem({ result }) {
  console.log(result, "result");
  return (
    <div className="productItem">
      <div className="title">{result.title}</div>
      <div>{result.price}</div>
      <img src={result.image} alt={result.title} width="70px" />
    </div>
  );
}
