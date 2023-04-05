import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../images/starImage.png";

const Header = () => {
  return (
    <nav class="navbar text-white bg-black navbarheight">
      <a class="navbar-brand d-flex flex-row align-items-center">
        <img src={logo} className="logoSize"></img>
        <span className="text-white mx-2 fs-4" style={{ fontWeight: "600" }}>
          StarClinch
        </span>
      </a>
      <span className="weight700 text-14px">Hello, Manish</span>
    </nav>
  );
};

export default Header;
