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
      filteredPokemons: [],
      i: 0,
      j: 50,
    };
    this.rechercheHandleChange = this.rechercheHandleChange.bind(this);
  }

  //appelle l'APi après le premier rendu pour éviter la page blanche au démarrage -- call the API after the first render to avoid the white page
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
          filteredPokemons: data,
        });
      });
  }

  //récupère les caractères tapés dans la barre de recherche -- fetch input entered in the searchbar
  rechercheHandleChange(event) {
    //création d'une constante qui va stocker le tableau filtré des pokemons dont le nom inclu les caractères tapés dans la barre de recherche --
    //declaration of a constante which stock the filtered array of pokemons when the name includes inputs entered in the searchbar
    let filtered = this.state.pokemons.filter((pokemon) => {
      return (
        pokemon.name
          .toLowerCase()

          // look at the search bar value to keep only the right Pokemon
          .includes(event.target.value.toLowerCase())
      );
    });

    //met à jour les states de la valeur recherchée et du tableau filtré -- update states of search value and filtered array
    // Ne pas faire plusieurs setStates quand on peut éviter: chacun d'entre eux va redéclencher un render -- Avoid to call setState multiple times as much as possible: each one of them call render()
    this.setState({
      filteredPokemons: filtered,
    });
  }

  addOne = () => {
    this.setState({ i: this.state.i + 50 });
    this.setState({ j: this.state.j + 50 });
  };
  lessOne = () => {
    this.setState({ i: this.state.i - 50 });
    this.setState({ j: this.state.j - 50 });
  };

  render() {
    return (
      <div className="gallery">
        <div className="recherche-nom">
          <div className="pokedex">
            {/*appelle RechercheNom en envoyant les props de rechercheHandleChange -- call RechercheNom sending rechercheHandleChange's props*/}
            <RechercheNom rechercheHandleChange={this.rechercheHandleChange} />
            {/*affiche un nouveau tableau à partir du tableau filtré -- pin up a new array based on the filtered array*/}
          </div>
        </div>
        <div className="pokemon-cards">
          {this.state.filteredPokemons
            .slice(this.state.i, this.state.j)
            .map((pokemon) => {
              return (
                <article>
                  <PokemonCard {...pokemon} />
                </article>
              );
            })}
        </div>
        <div>
          <button onClick={this.addOne}>Next</button>
          <button onClick={this.lessOne}>Previous</button>
        </div>
      </div>
    );
  }
}

export default Gallery;
