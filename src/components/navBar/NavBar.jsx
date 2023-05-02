import React from "react";
import logo from "../../images/logo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo" width="50px" />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <a href="##">Home</a>
          </li>
          <li>
            <a href="##">Product</a>
          </li>
          <li>
            <a href="##">Favourite</a>
          </li>
          <li>
            <a href="##">Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
