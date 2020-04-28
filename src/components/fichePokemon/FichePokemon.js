import React from "react";
import DescriptionPokemon from "./DescriptionPokemon";
import "./FichePokemon.css";
//fonction FichePokemon extrait, via un props "pokemon" les données de l'API enregistré dans this.state.OnePokemon dans la class PokeCall
//va permettre de mettre en place via le css tous les éléments
//FichePokemon function extracts, via a "pokemon" accessory, the API data saved in this.state.OnePokemon in the PokeCall class
// will allow to set up via the css all the elements
function FichePokemon({ pokemon }) {
  const urlSprites = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;
  console.log("----------");
  console.log(pokemon.moves);
  console.log("----------");
  return (
    <div className="fiche">
      <div className="backgroundGeneral">
        <div className="titre">
          <p className="nomId">
            {pokemon.name} - N°{pokemon.id}
          </p>
        </div>
        <div className="Infos">
          <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.id} />
          </div>
          <div>
            <p className="sousTitre">Main information </p>
            <p>Number: {pokemon.id}</p>
            <p>types:</p>
            {pokemon.types.map((obj) => {
              return <p key={obj.type.name}>{obj.type.name}</p>;
            })}
            <p>height: {pokemon.height}</p>
            <p>weight: {pokemon.weight}</p>
          </div>
        </div>
      </div>
      <div className="backgroundGeneral statMove">
        <div>
          <p className="sousTitre">Basic statistics</p>
          {pokemon.stats.map((obj) => {
            return (
              <p key={obj.stat.name}>
                {obj.stat.name}: {obj.base_stat}
              </p>
            );
          })}
        </div>
        <div>
          <p className="sousTitre">Attacks learned by level</p>
          <div className="titleBoard">
            <p>Attacks</p>
            <p>USUL</p>
          </div>
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
                  <p>
                    {obj.move.name}: {array.level_learned_at}
                  </p>
                );
              });
          })}
        </div>
      </div>
      <div>
        <DescriptionPokemon />
      </div>
    </div>
    //faire le css de la description dans DescriptionPokemonCard
  );
}

export default FichePokemon;
