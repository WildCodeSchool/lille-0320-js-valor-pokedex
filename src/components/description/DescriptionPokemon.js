import React from "react";
import axios from "axios";
import DescriptionPokemonCard from "./DescriptionPokemonCard";
/*fonction URL pour sortir les url de data -- function URL to take out URL from data*/

class DescriptionPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OnePokemon: [],
    };
  }

  componentDidMount() {
    const pokemonId = 1;
    this.getPokemon(pokemonId);
  }
  getPokemon(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
    //demande de l'API -- API's request
    axios
      .get(url)
      // utilise le data pour mettre à jour le state -- use data to update the state.
      .then(({ data }) => {
        this.setState({
          OnePokemon: data,
        });
      });
  }
  render() {
    return (
      <div>
        <article>
          <DescriptionPokemonCard pokemon={this.state.OnePokemon} />
        </article>
      </div>
    );
  }
}

export default DescriptionPokemon;
