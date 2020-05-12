import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
/*allows to insert the title logo in the header*/
/*permet d'insérer le logo-titre dans le header*/
function Header() {
  return (
    <header>
      <nav className="header">
        <Link to={`/`}>
          <img src="/img/logo.png" alt="mon pokedex logo" className="logo" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
