import React from "react";
import axios from "axios";
import FichePokemon from "./FichePokemon"
/*fonction URL pour sortir les url de data -- function URL to take out URL from data*/

class Pokecall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        pokemons: {
            sprites:{font_default: " ",},
            id:0,
            name: " ",
        }
      };
  }
  /*componentDidUpdate(prevProps) {
    extractCHaracterId sort l'id de l'appel suivant
    const extractCharacterId = this.props.match.params.characterId;
    /*prevCharacter sors l'id enregistré précédemment
    const prevCharacter = prevProps.match.params.characterId;
    /*le if compare les 2 constantes si elles sont différentes, il 
  renvoi le dernier character extrait
    if (prevCharacter !== extractCharacterId) {
      this.loadCharacterDetails(extractCharacterId);
    }
  }*/

  componentDidUpdate(prevProps) {
    /*extractCHaracterId sort l'id de l'appel suivant*/
    const extractpokemonId = this.props.match.params.pokemonId;
    /*prevCharacter sors l'id enregistré précédemment*/
    const prevpokemonId = prevProps.match.params.pokemonId;
    /*le if compare les 2 constantes si elles sont différentes, il 
  renvoi le dernier character extrait*/
    if (prevpokemonId !== extractpokemonId) {
      this.getPokemon(extractpokemonId);
    }
  }

  componentDidMount() {
    const pokemonId = this.props.match.params.pokemonId;
    this.getPokemon(pokemonId);
  }
 /*   componentDidMount() {
    const characterId = this.props.match.params.characterId;
    this.loadCharacterDetails(characterId);
  }
  }*/
  /*loadCharacterDetails(characterId) {
    const url = `https://my-json-server.typicode.com/WildCodeSchool/starwars-api/characters/${characterId}`;
    // Use axios to get data from the url
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        console.log(data); //permet de vérifier les données dans la console
        this.setState({
          character: data
        });
      });
  }*/

  getPokemon(pokemonId) {

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=649/${pokemonId}`;
    //demande de l'API -- API's request
    axios
      .get(url)
      // extrait les data de l'api et l'enregistre dans reponse -- extract datas from API and register the answers
      .then((response) => response.data.results)
      // utilise le data pour mettre à jour le state -- use data to update the state.
      .then((data) => {
        this.setState({
          pokemons: data,
        });
      });
  }
  render() {
    return (
      <div className="Pokecall">
            <img src={this.state.pokemons.sprites.front_default}/>
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