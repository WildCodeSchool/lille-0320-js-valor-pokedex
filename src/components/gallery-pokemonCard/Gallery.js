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
  //appelle l'APi après le premier rendu pour éviter la page blanche au démarrage -- call the API after the first render to avoid the white page
  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API -- API's request
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50") // WARNING: only 50 pokemon retrieved for easier tests
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
    console.log(event.target.value); //affiche dans la console pour faciliter le développement WARNING
    //création d'une constante qui va stocker le tableau filtré des pokemons dont le nom inclu les caractères tapés dans la barre de recherche --
    //declaration of a constante which stock the filtered array of pokemons when the name includes inputs entered in the searchbar
    let filtered = this.state.pokemons.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase()); // <- Last error: you must use the NEW value of needle (in event.target.value), not the old one (this.state.needle)
    });
    //met à jour les states de la valeur recherchée et du tableau filtré -- update states of search value and filtered array
    // Ne pas faire plusieurs setStates quand on oeut éviter: chacun d'entre eux va redéclencher un render.
    this.setState({
      needle: event.target.value,
      filteredPokemons: filtered,
    });
  }

  render() {
    return (
      <div className="gallery">
        {/*appelle RechercheNom en envoyant les props de rechercheHandleChange -- call RechercheNom sending rechercheHandleChange's props*/}
        <RechercheNom rechercheHandleChange={this.rechercheHandleChange} />
        {/*affiche un nouveau tableau à partir du tableau filtré -- pin up a new array based on the filtered array*/}
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
