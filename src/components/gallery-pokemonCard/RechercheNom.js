import React from "react";

function RechercheNom(props) {
  return (
    <div>
      <label htmlFor="search">Search by name:</label>
      <input
        id="search"
        type="text"
        placeholder="ex: pikachu, ..."
        name="searchBar"
        onChange={props.rechercheHandleChange}
      />
    </div>
  );
}

export default RechercheNom;
