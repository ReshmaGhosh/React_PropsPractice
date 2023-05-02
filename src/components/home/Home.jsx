import React from "react";
import backgroundimage from "../../images/skincare.avif";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-para">
        <h1>Sale 20% off</h1>
        <h2>On Everything</h2>
        <p>
          Discover the secrets of glowing, radiant skin with our carefuly
          curated collection of skincare products.
        </p>
        <button>Shop Now</button>
      </div>
    </div>
  );
}
