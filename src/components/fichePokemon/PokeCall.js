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
      },
    };
  }

  //#6
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
  //#3 //#7
  componentDidMount() {
    //const pokemonId = this.props.match.params.pokemonId;
    const pokemonId = 1;
    this.getPokemon(pokemonId);
  }

  //récupère les éléments dans l'API selon l'id du pokemon (pokemonId) puis met à jour le state de OnePokemon
  //get the elements in the API according to the pokemon id (pokemonId) then update the state of OnePokemon
  //#4 //#8
  getPokemon(pokemonId) {
    console.log("xxxxxxxxxxxxxxxx");
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
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
      <section className="Pokecall">
        <FichePokemon pokemon={this.state.OnePokemon} />
      </section>
    );
  }
}

export default Pokecall;

/*<p>
            NOTE: il faut retrouver les attaques de la version
            "ultra-sun-ultra-moon" UNIQUEMENT. Où ? Il faut aller dans: moves >
            numéro (ex: 66) > "version_group_details" > numéro (ex: 4) >
            version_group > name. On retrouve > ultra-sun-ultra-moon
          </p>
*/
