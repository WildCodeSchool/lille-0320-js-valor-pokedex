import React from "react";
import Header from "./components/header-footer-bandeau/Header";
import Footer from "./components/header-footer-bandeau/Footer";
import Bandeau from "./components/header-footer-bandeau/Bandeau";
import Gallery from "./components/gallery-pokemonCard/Gallery";
import Pokecall from "./components/fichePokemon/PokeCall";
import FichePokemon from "./components/fichePokemon/FichePokemon";

import "./App.css";
import DescriptionPokemon from "./components/description/DescriptionPokemon";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Pokecall />
        <DescriptionPokemon />
      </main>
      <Footer className="Footer" />
    </div>
  );
}

export default App;
