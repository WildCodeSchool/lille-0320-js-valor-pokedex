import React from "react";
import axios from "axios";
import FichePokemon from "./FichePokemon";

//fonction PokeCall pour sortir les éléments de data -- function PokeCall to take out elements from data
//les éléments nécessaires sont stockés dans le state de OnePokemon -- the necessary elements are stored in the state of OnePokemon
//#1 //#9
class Pokecall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      OnePokemon: {
        sprites: {},
        id: 0,
        name: "",
        height: 0,
        weight: 0,
        types: [
          {
            type: { name: "" },
          },
        ],
        moves: [
          {
            move: { name: "" },
            version_group_details: [
              {
                level_learned_at: 0,
                move_learn_method: { name: "", url: "" },
                version_group: { name: "", url: "" },
              },
            ],
          },
        ],
        stats: [
          {
            base_stat: 0,
            stat: { name: "" },
          },
        ],
        species: { url: "" },
      },
    };
  }

  //#6
  componentDidUpdate(prevProps) {
    /*prevpokemonName sors le nom enregistré précédemment -- prevpokemonName output the previously saved name*/
    const prevpokemonName = this.props.match.params.pokemonName;
    /*extractpokemonName sort le nom  de l'appel suivant -- extractpokemonName sort the name of the next call*/
    const extractpokemonName = prevProps.match.params.pokemonName;
    /*le if compare les 2 constantes si elles sont différentes, il 
  renvoi le dernier character extrait -- the if compares the 2 constants if they are different, it
   returns the last character extracted*/
    if (prevpokemonName !== extractpokemonName) {
      this.getPokemon(extractpokemonName);
    }
  }
  //#3 //#7
  componentDidMount() {
    const pokemonName = this.props.match.params.pokemonName;
    this.getPokemon(pokemonName);
  }

  //récupère les éléments dans l'API selon le nom du pokemon (pokemonName) puis met à jour le state de OnePokemon
  //get the elements in the API according to the pokemon name (pokemonName) then update the state of OnePokemon
  //#4 //#8
  getPokemon(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    //demande de l'API -- API's request
    axios.get(url).then(({ data }) => {
      this.setState({
        OnePokemon: data,
      });
    });
  }

  //utile pour la barre de recherche -- useful for the search bar
  rechercheHandleChange(event) {
    //création d'une constante qui va stocker le tableau filtré des pokemons dont le nom inclu les caractères tapés dans la barre de recherche --
    //declaration of a constante which stock the filtered array of pokemons when the name includes inputs entered in the searchbar
    let filtered = this.state.pokemons.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.needle.toLowerCase());
    });
    //met à jour les states de la valeur recherchée et du tableau filtré -- update states of search value and filtered array
    this.setState({ needle: event.target.value, filteredPokemons: filtered });
  }

  //#2 //#5 //#10
  //on renvoi tout les éléments d'un pokemon (OnePokemon) dans "FichePokemon" pour mettre les éléments en place.
  // we return all the elements of a pokemon (OnePokemon) in "FichePokemon" to put the elements in place.
  render() {
    return (
      <section className="Pokecall" key={this.state.OnePokemon.i}>
        <FichePokemon pokemon={this.state.OnePokemon} />
      </section>
    );
  }
}

export default Pokecall;
