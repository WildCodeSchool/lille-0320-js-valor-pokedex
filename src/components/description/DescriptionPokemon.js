import React from "react";
import axios from "axios";
import DescriptionPokemonCard from "./DescriptionPokemonCard";
/*fonction URL pour sortir les url de data -- function URL to take out URL from data*/

class DescriptionPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OnePokemon: {
        flavor_text_entries: [
          {
            flavor_text: "",
            language: {
              name: "",
            },
          },
        ],
      },
    };
  }

  componentDidMount() {
    const pokemonId = 1;
    this.getPokemon(pokemonId);
  }

  getPokemon(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
    //demande de l'API -- API's request
    axios.get(url).then(({ data }) => {
      console.log(data);
      this.setState({
        Onepokemon: data,
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
