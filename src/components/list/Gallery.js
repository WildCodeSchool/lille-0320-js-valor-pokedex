import React from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
/*fonction URL pour sortir les url de data*/

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
    //demande de l'API
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      // extrait les data de l'api et l'enregistre dans reponse
      .then((response) => response.data.results)
      // utilise le data pour mettre à jour le state
      .then((data) => {
        this.setState({
          pokemons: data,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.pokemons.map((pokemon) => {
          return (
            <article>
              <PokemonCard {...pokemon} />
            </article>
          );
        })}
      </div>
    );
  }
}

export default Gallery;

/* const adress = () => (
      <div>
        {this.state.pokemon.map((url) => {
          return console.log(url);
        })}
      </div>
    );
  }*/
