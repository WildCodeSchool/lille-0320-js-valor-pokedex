import React from "react";
import axios from "axios";
import "./FichePokemon.css";
//fonction FichePokemon extrait, via un props "pokemon" les données de l'API enregistré dans this.state.OnePokemon dans la class PokeCall
//va permettre de mettre en place via le css tous les éléments
//FichePokemon function extracts, via a "pokemon" accessory, the API data saved in this.state.OnePokemon in the PokeCall class
// will allow to set up via the css all the elements
function FichePokemon({ pokemon }) {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.id} />
      <ul>
        <li>
          ID: <strong>{pokemon.id}</strong>
        </li>
        <li>
          Name: <strong>{pokemon.name}</strong>
        </li>
        <li>
          height: <strong>{pokemon.height}</strong>
        </li>
        <li>
          weight: <strong>{pokemon.weight}</strong>
        </li>
        <li>
          types:
          {pokemon.types.map((obj) => {
            return (
              <p>
                <strong>{obj.type.name}</strong>
              </p>
            );
          })}
        </li>
        <li>
          stats:
          {pokemon.stats.map((obj) => {
            return (
              <p>
                <strong>
                  {obj.stat.name}: {obj.base_stat}
                </strong>
              </p>
            );
          })}
        </li>
        <li>
          moves:
          {pokemon.moves.map((obj) => {
            {
              obj.version_group_details.map((array) => {
                return <p> {array.version_group}</p>;
              });
            }
          })}
        </li>
      </ul>
    </div>
  );
}

export default FichePokemon;
