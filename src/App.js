import React from "react";
import Header from "./components/header-footer-bandeau/Header";
import Footer from "./components/header-footer-bandeau/Footer";
import Bandeau from "./components/header-footer-bandeau/Bandeau";
import Gallery from "./components/gallery-pokemonCard/Gallery";
import Pokecall from "./components/fichePokemon/PokeCall";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Bandeau />

        <Pokecall />
      </main>
      <Footer />
    </div>
  );
}

export default App;
