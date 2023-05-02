import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ productArrey }) {
  return (
    <div>
      <div className="productList">
        {productArrey.map((item) => {
          return <ProductItem key={item.id} result={item}></ProductItem>;
        })}
      </div>
    </div>
  );
}
