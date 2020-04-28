import React from "react";
import Bandeau from "./header-footer-bandeau/Bandeau";
import Gallery from "./gallery-pokemonCard/Gallery";

//ajouter la fonction recherche et le pokemon du jour dans cette fonction
//permet de regrouper les éléments de la homepage (bandeau, recherche, gallery, pokemon du jour)
//allows you to group the elements of the homepage (banner, search, gallery, pokemon of the day)
function Homepage() {
  return (
    <div>
      <Bandeau key={Bandeau} />
      <Gallery key={Gallery} />
    </div>
  );
}

export default Homepage;
