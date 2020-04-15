import React from "react";
import Recherche from "./Recherche";

const pokemon = [
  {
    name: "Bulbizarre",
    id: 2,
    url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "Carapuce",
    id: 14,
    url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  },
  {
    name: "Salamèche",
    id: 22,
    url:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
  },
];

const TestPokemon = () => (
  <div>
    {pokemon.map((item) => (
      <Recherche name={item.name} id={item.id} url={item.url} key={item.name} />
    ))}
  </div>
);

export default TestPokemon;
