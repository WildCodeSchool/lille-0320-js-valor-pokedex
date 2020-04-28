import React from "react";
import Bandeau from "./header-footer-bandeau/Bandeau";
import Gallery from "./gallery-pokemonCard/Gallery";

//ajouter la fonction recherche et le pokemon du jour dans cette fonction
function Homepage() {
  return (
    <div>
      <Bandeau />
      <Gallery />
    </div>
  );
}

export default Homepage;
