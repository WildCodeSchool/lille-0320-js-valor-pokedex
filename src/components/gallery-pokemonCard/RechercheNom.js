import React from "react";
import "./Recherche.css";

function RechercheNom(props) {
  return (
    <div>
      <label htmlFor="search"></label>
      <input
        className="searchBar"
        id="search"
        type="text"
        placeholder="Search by Name"
        name="searchBar"
        onChange={props.filtreHandleChange}
      />
    </div>
  );
}

export default RechercheNom;
