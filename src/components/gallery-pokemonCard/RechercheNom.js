import React from "react";

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
        onChange={props.rechercheHandleChange}
      />
    </div>
  );
}

export default RechercheNom;
