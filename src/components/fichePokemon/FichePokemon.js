import React from "react";
import DescriptionPokemon from "./DescriptionPokemon";
import Vulnerabilities from "./Vulnerabilities";
import "./styles/FichePokemon.css";
import "./styles/mainInformation.css";
import "./styles/vulnerabilites.css";
import "./styles/description.css";
import "./styles/basicStats.css";
import "./styles/attacks.css";
import Footer from "../header-footer-bandeau/Footer";
//fonction FichePokemon extrait, via un props "pokemon" les données de l'API enregistré dans this.state.OnePokemon dans la class PokeCall
//va permettre de mettre en place via le css tous les éléments
//FichePokemon function extracts, via a "pokemon" accessory, the API data saved in this.state.OnePokemon in the PokeCall class
// will allow to set up via the css all the elements
//MODIFS l.32
function FichePokemon({ pokemon }) {
  const urlSprites = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`; //Lien vers les artworks. - Links to the artworks pictures.

  //permet de modifier la couleur selon le niveau de stats -- modify the color according to the level of stats

  const color = (obj) => {
    if (obj.base_stat < 50) {
      return "rouge";
    } else if (obj.base_stat < 100 && obj.base_stat >= 50) {
      return "orange";
    } else {
      return "vert";
    }
  };

  let movesMess = [];
  let movesAll = [];
  if (pokemon.moves[1]) {
    movesMess = pokemon.moves
      .map((obj) => {
        const details = obj.version_group_details;
        return details //renvoies le tableau version_group_details - return the version_group_details array
          .filter((array) => {
            //dans version_group_detail, prendre que ce qui contient USUM et level-up uniquement - in version_group_detail, get the USUM and levelup content only
            return (
              array.version_group.name === "ultra-sun-ultra-moon" &&
              array.move_learn_method.name === "level-up"
            );
          })
          .map((array) => {
            return {
              level: array.level_learned_at,
              name: obj.move.name,
            };
          });
      })
      .filter((obj) => {
        return obj.length !== 0;
      });

    for (let i = 0; i < movesMess.length; i++) {
      movesAll.push(...movesMess[i]);
    }

    movesAll = movesAll.sort((obj1, obj2) => {
      return obj1.level - obj2.level;
    });
  }

  return (
    <div>
      <section className="fiche">
        <article className="column">
          <div className="backgroundGeneral mainInformation">
            <div className="PokemonName">
              <div className="shape2"></div>
              <p className="nomId">
                {pokemon.name.includes("-") && pokemon.name !== "porygon-z"
                  ? pokemon.name.charAt(0).toUpperCase() +
                    pokemon.name
                      .substring(1)
                      .toLowerCase()
                      .slice(0, pokemon.name.indexOf("-") - 1)
                  : pokemon.name.charAt(0).toUpperCase() +
                    pokemon.name.substring(1).toLowerCase()}{" "}
                - N°{pokemon.id}
              </p>
            </div>
            <div className="Infos">
              <div className="imgArtwork">
                <img src={urlSprites} alt={pokemon.id} className="img" />
              </div>
              <div>
                <div className="sousTitre">Main information</div>
                <p>Number: {pokemon.id}</p>
                <p>Types:</p>
                {pokemon.types.map((obj) => {
                  return (
                    <p className={("types", obj.type.name)} key={obj.type.name}>
                      {obj.type.name}
                    </p>
                  );
                })}
                <p>Height: {pokemon.height / 10} m</p>
                <p>Weight: {pokemon.weight / 10} kg</p>
              </div>
            </div>
          </div>
          <div className="backgroundGeneral vulnerabilites">
            <p className="sousTitre">Weaknesses and Resistances</p>
            {pokemon.types[0].type.name && (
              <Vulnerabilities types={pokemon.types} />
            )}
          </div>
          <div className="backgroundGeneral description">
            <p className="sousTitre">Description </p>
            <DescriptionPokemon id={pokemon.id} />
          </div>
        </article>
        <article className="backgroundGeneral column2">
          <div className="basicStats">
            <p className="sousTitre">Basic statistics</p>
            {pokemon.stats.reverse().map((obj) => {
              return (
                <div className="stat" key={obj.stat.name}>
                  <p className="name">{obj.stat.name}</p>
                  <p> {obj.base_stat}</p>

                  <div className="status">
                    <div className="statBar"></div>
                    <progress
                      className={color(obj)}
                      value={obj.base_stat}
                      max="170"
                    ></progress>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="blackline"></div>
          <div className="attacks">
            <p className="sousTitre">Attacks learned by level</p>
            <div className="titleBoard">
              <p className="leftTitle">Attacks</p>
              <p className="rightTitle">Ultra Sun-Ultra Moon</p>
            </div>
            <div>
              {movesAll[1] &&
                movesAll.map((obj, i) => {
                  return (
                    <div className="listAttak" key={i}>
                      <div className="left">
                        <p>{obj.name}</p>
                      </div>
                      <div className="right">
                        <p>{obj.level === 0 ? "Evolution" : obj.level}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
}
export default FichePokemon;
