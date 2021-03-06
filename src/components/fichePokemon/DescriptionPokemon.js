import React from "react";
import axios from "axios";
import DescriptionPokemonCard from "./DescriptionPokemonCard";
/*fonction URL pour sortir les url de data -- function URL to take out URL from data*/

class DescriptionPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OnePokemon: {
        id: "",
      },
    };
  }

  //#3 //#7

  componentDidMount() {
    const pokemonId = this.props.id;
    this.getPokemon(pokemonId);
  }

  getPokemon(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
    //demande de l'API -- API's request
    axios.get(url).then(({ data }) => {
      this.setState({
        OnePokemon: data,
      });
    });
  }
  render() {
    return (
      <div>
        <DescriptionPokemonCard pokemon={this.state.OnePokemon} />
      </div>
    );
  }
}

export default DescriptionPokemon;
