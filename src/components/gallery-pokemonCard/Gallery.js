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
      pokemons: [],
      needle: "",
    };
    this.rechercheHandleChange = this.rechercheHandleChange.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API -- API's request
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=649")
      // extrait les data de l'api et l'enregistre dans reponse -- extract datas from API and register the answers
      .then((response) => response.data.results)
      // utilise le data pour mettre à jour le state -- use data to update the state.
      .then((data) => {
        this.setState({
          pokemons: data,
        });
      });
  }

  rechercheHandleChange(event) {
    this.setState({ needle: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="searchBar">
          <label htmlFor="search">Search: </label>
          <input
            id="search"
            type="text"
            name="searchBar"
            value={this.state.needle}
            onChange={this.rechercheHandleChange}
          />
        </div>
        <div className="gallery">
          {this.state.pokemons
            .filter((pokemon) => {
              /*if (Number(this.needle) && this.needle !== 0) {
                return pokemon.id === this.needle;
              } else*/ if (
                this.needle !== ""
              ) {
                return pokemon.name.includes(this.needle);
              } else return pokemon;
            })
            .map((pokemon) => {
              return (
                <article>
                  <PokemonCard {...pokemon} />
                </article>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Gallery;
