import React from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import "./Gallery.css";

import { Link } from "react-router-dom";
/*fonction URL pour sortir les url de data -- function URL to take out URL from data*/

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API -- API's request
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=35")
      // extrait les data de l'api et l'enregistre dans reponse -- extract datas from API and register the answers
      .then((response) => response.data.results)
      // utilise le data pour mettre à jour le state -- use data to update the state.
      .then((data) => {
        this.setState({
          pokemons: data,
        });
      });
  }
  render() {
    return (
      <div className="gallery">
        {this.state.pokemons.map((pokemon) => {
          return (
            <article key={pokemon.name}>
              <Link to={`/Pokemon/${pokemon.name}`}>
                <PokemonCard {...pokemon} />
              </Link>
            </article>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
