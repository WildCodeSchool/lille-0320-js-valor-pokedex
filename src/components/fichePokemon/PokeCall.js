import React from "react";
import axios from "axios";
import FichePokemon from "./FichePokemon";
/*fonction URL pour sortir les url de data -- function URL to take out URL from data*/

class Pokecall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: {
        sprites: { font_default: "" },
        id: 0,
        name: "",
      },
    };
  }

  /*componentDidUpdate(prevProps) {
    const pokemonId = 25;
    /*extractCHaracterId sort l'id de l'appel suivant*/
  //const extractpokemonId = this.props.match.params.pokemonId;
  /*prevCharacter sors l'id enregistré précédemment*/
  //const prevpokemonId = prevProps.match.params.pokemonId;
  /*le if compare les 2 constantes si elles sont différentes, il 
  renvoi le dernier character extrait*/
  /*if (prevpokemonId !== extractpokemonId) {
      this.getPokemon(extractpokemonId);
    }
  }*/

  componentDidMount() {
    //const pokemonId = this.props.match.params.pokemonId;
    const pokemonId = 25;
    this.getPokemon(pokemonId);
  }

  getPokemon(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    //demande de l'API -- API's request
    axios.get(url).then(({ data }) => {
      console.log(data);
      this.setState({
        pokemons: data,
      });
    });
  }
  render() {
    return (
      <div className="Pokecall">
        <img src={this.state.pokemons.sprites.front_default} />
        <ul>
          <li>
            ID: <strong>{this.state.pokemons.sprites.id}</strong>
          </li>
          <li>
            Name: <strong>{this.state.pokemons.name}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pokecall;
