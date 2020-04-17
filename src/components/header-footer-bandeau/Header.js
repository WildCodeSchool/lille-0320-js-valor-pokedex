import React from "react";
import "./Header.css";
import logo from "./img/logo.png";

function Header() {
  return (
    <header>
      <nav className="header">
        <a href="App.js">
          <img src={logo} alt="mon pokedex logo" className="logo" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
