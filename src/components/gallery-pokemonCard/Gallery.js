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
      searchBar: "",
      type1: "fire",
      type2: "",
    };
    this.filtreHandleChange = this.filtreHandleChange.bind(this);
    this.applyFiltre = this.applyFiltre.bind(this);
  }

  //appelle l'APi après le premier rendu pour éviter la page blanche au démarrage -- call the API after the first render to avoid the white page
  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API -- API's request

    axios

      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100")

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

  /*
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
  */

  //compare la valeur de la cible avec le nom appelé
  filtreHandleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  //filtre par type
  applyFiltre() {
    console.log("rentré");
    let filtered = this.state.pokemons;
    if (!this.state.searchBar && !this.state.type1 && !this.state.type2) {
      return this.setState({ filteredPokemons: this.state.pokemons });
    } else {
      if (this.state.searchBar) {
        filtered = filtered.filter((pokemon) => {
          return pokemon.name
            .toLowerCase()
            .includes(this.state.searchBar.toLowerCase());
        });
      }
      if (this.state.type1) {
        console.log("rentré 2");
        axios
          .get(`https://pokeapi.co/api/v2/type/${this.state.type1}`)
          .then((response) => response.data)
          .then((data) => {
            filtered = filtered.filter((onePokemon) => {
              return data.pokemon.find((found) => {
                console.log("egale", found.pokemon.name === onePokemon.name);
                return found.pokemon.name === onePokemon.name;
              });
            });
          });
      }
      if (this.state.type2) {
        axios
          .get(`https://pokeapi.co/api/v2/type/${this.state.type2}`)
          .then((response) => response.data)
          .then((data) => {
            filtered = filtered.filter((onePokemon) => {
              return data.pokemon.find((found) => {
                return found.pokemon.name === onePokemon.name;
              });
            });
          });
      }
      this.setState({ filteredPokemons: filtered });
    }
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
            <RechercheNom filtreHandleChange={this.filtreHandleChange} />
            {/*affiche un nouveau tableau à partir du tableau filtré -- pin up a new array based on the filtered array*/}
          </div>
        </div>
        <button onClick={() => this.applyFiltre()}>Filtre</button>
        <div className="pokemon-cards">
          {this.state.filteredPokemons
            .slice(this.state.i, this.state.j)
            .map((pokemon, i) => {
              return (
                <article key={i}>
                  <PokemonCard {...pokemon} />
                </article>
              );
            })}
        </div>
        <div className="buttonGallery">
          <button onClick={this.lessOne ? this.lessOne : <p>clic again</p>}>
            Prev.
          </button>
          <button onClick={this.addOne}>Next</button>
        </div>
      </div>
    );
  }
}

export default Gallery;
