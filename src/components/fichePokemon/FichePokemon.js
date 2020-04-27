import React from "react";
import axios from "axios";
import "./FichePokemon.css";
//fonction FichePokemon extrait, via un props "pokemon" les données de l'API enregistré dans this.state.OnePokemon dans la class PokeCall
//va permettre de mettre en place via le css tous les éléments
//FichePokemon function extracts, via a "pokemon" accessory, the API data saved in this.state.OnePokemon in the PokeCall class
// will allow to set up via the css all the elements
function FichePokemon({ pokemon }) {
  console.log("----------");
  console.log(pokemon.moves);
  console.log("----------");
  return (
    <div className="fiche">
      <div className="identity">
        <img src={pokemon.sprites.front_default} alt={pokemon.id} />
        <p>
          ID: <strong>{pokemon.id}</strong>
        </p>
        <p>
          Name: <strong>{pokemon.name}</strong>
        </p>
        <p>
          height: <strong>{pokemon.height}</strong>
        </p>
        <p>
          weight: <strong>{pokemon.weight}</strong>
        </p>
        <div>
          types:
          {pokemon.types.map((obj) => {
            return (
              <p key={obj.type.name}>
                <strong>{obj.type.name}</strong>
              </p>
            );
          })}
        </div>
      </div>
      <div className="stats">
        stats:
        {pokemon.stats.map((obj) => {
          return (
            <p key={obj.stat.name}>
              <strong>
                {obj.stat.name}: {obj.base_stat}
              </strong>
            </p>
          );
        })}
      </div>
      <div className="moves">
        {pokemon.moves.map((obj) => {
          const details = obj.version_group_details;
          return details //renvoies le tableau version_group_details
            .filter((array) => {
              //dans version_group_detail, prendre que ce qui contient USUM et level-up uniquement
              return (
                array.version_group.name === "ultra-sun-ultra-moon" &&
                array.move_learn_method.name === "level-up"
              );
            })
            .sort((ob1, ob2) => {
              return -1;
            })
            .map((array) => {
              //renvoi le level_lernead_at de chaque élément
              return (
                <li>
                  {obj.move.name}: {array.level_learned_at}
                </li>
              );
            });
        })}
      </div>
    </div>
  );
}

export default FichePokemon;
