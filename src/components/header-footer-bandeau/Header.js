import React from "react";
import "./Header.css";
import logo from "./logo.png";

function Header() {
  return (
    /*img mon pokedex réalisée avec https://fontmeme.com */

    <nav className="header">
      <a href="App.js">
        <img src={logo} alt="mon pokedex logo" className="logo" />
      </a>
    </nav>
  );
}

export default Header;
