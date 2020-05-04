import React from "react";
import DescriptionPokemon from "./DescriptionPokemon";
import "./styles/FichePokemon.css";
import "./styles/mainInformation.css";

//fonction FichePokemon extrait, via un props "pokemon" les données de l'API enregistré dans this.state.OnePokemon dans la class PokeCall
//va permettre de mettre en place via le css tous les éléments
//FichePokemon function extracts, via a "pokemon" accessory, the API data saved in this.state.OnePokemon in the PokeCall class
// will allow to set up via the css all the elements
function FichePokemon({ pokemon }) {
  return (
    <section className="fiche">
      <article className="column">
        <div className="backgroundGeneral mainInformation">
          <div className="PokemonName">
            <p className="nomId">
              {pokemon.name} - N°{pokemon.id}
            </p>
          </div>
          <div className="Infos">
            <div>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.id}
                className="img"
              />
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
        <div className="backgroundGeneral vulnerabilites">
          <p className="sousTitre">vulnerabilites </p>
          <p>vulnerabilites</p>
        </div>
        <div className="backgroundGeneral description">
          <p className="sousTitre">Description </p>
          <DescriptionPokemon />
        </div>
      </article>
      <article className="backgroundGeneral column2">
        <div className="basicStats">
          <p className="sousTitre">Basic statistics</p>
          {pokemon.stats.map((obj) => {
            return (
              <p key={obj.stat.name}>
                {obj.stat.name}: {obj.base_stat}
              </p>
            );
          })}
        </div>
        <div className="attacks">
          <p className="sousTitre">Attacks learned by level</p>
          <div className="titleBoard">
            <p>Attacks</p> <p> Ultra Sun-Ultra Moon</p>
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
      </article>
    </section>
    //faire le css de la description dans DescriptionPokemonCard
  );
}

export default FichePokemon;
