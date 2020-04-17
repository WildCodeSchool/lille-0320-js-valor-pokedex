import React from "react";
import "./Header.css";
/*allows to insert the title logo in the header*/
/*permet d'insérer le logo-titre dans le header*/
function Header() {
  return (
    <header>
      <nav className="header">
        <a href="App.js">
          <img src="/img/logo.png" alt="mon pokedex logo" className="logo" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
