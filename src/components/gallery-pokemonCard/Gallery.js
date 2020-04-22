import React from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import "./Gallery.css";
import RechercheNom from "./RechercheNom";
/*fonction URL pour sortir les url de data -- function URL to take out URL from data*/

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needle: "",
      pokemons: [],
      filteredPokemons: [],
    };
    this.rechercheHandleChange = this.rechercheHandleChange.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API -- API's request
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50")
      // extrait les data de l'api et l'enregistre dans reponse -- extract datas from API and register the answers
      .then((response) => response.data.results)
      // utilise le data pour mettre à jour le state -- use data to update the state.
      .then((data) => {
        this.setState({
          pokemons: data,
          filteredPokemons: data,
        });
      });
  }

  rechercheHandleChange(event) {
    console.log(event.target.value);
    let filtered = this.state.pokemons.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.needle.toLowerCase());
    });
    this.setState({ needle: event.target.value });
    this.setState({ filteredPokemons: filtered });
  }

  render() {
    return (
      <div className="gallery">
        <RechercheNom rechercheHandleChange={this.rechercheHandleChange} />
        {this.state.filteredPokemons.map((pokemon) => {
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
