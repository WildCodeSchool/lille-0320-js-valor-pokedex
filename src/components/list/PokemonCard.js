import React from "react";
import axios from "axios";

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      url: props.url,
      data: {},
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API
    axios
      .get(this.state.url)
      // extrait l'url du pokemon pris avant dans gallery
      .then((response) => response.data)
      // utilise le data pour mettre à jour le state
      .then((data) => {
        console.log(data); //permet de vérifier les données dans la console
        this.setState({
          data: data,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.data.id ? (
          <div>
            <img
              src={this.state.data.sprites.front_default}
              alt={this.state.data.name}
            />
            <p>
              {this.state.data.id} {this.state.data.name}
            </p>
          </div>
        ) : (
          <p>toto</p>
        )}
      </div>
    );
  }
}

/*function PokemonCard({ pokemon }) {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>
        {pokemon.id} {pokemon.name}
      </p>
    </div>
  );
}*/

export default PokemonCard;
