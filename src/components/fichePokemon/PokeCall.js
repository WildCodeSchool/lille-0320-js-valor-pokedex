import React from "react";
import axios from "axios";
import FichePokemon from "./FichePokemon";

/*fonction URL pour sortir les url de data -- function URL to take out URL from data*/
//#1 //#9
class Pokecall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: {
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
            move: {},
            version_group_details: [
              {
                level_learned_at: 0,
                move_learn_method: { name: "", url: "" },
                version_group: { name: "", url: "" },
              },
            ],
          },
          {
            version_group_details: [
              { version_group: { name: "" }, move_learn_method: { name: "" } },
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
  //#4 //#8
  getPokemon(pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    //demande de l'API -- API's request
    axios.get(url).then(({ data }) => {
      console.log(data); // a supprimer pour le merge
      this.setState({
        pokemons: data,
      });
    });
  }
  rechercheHandleChange(event) {
    console.log(event.target.value); //affiche dans la console pour faciliter le développement WARNING
    //création d'une constante qui va stocker le tableau filtré des pokemons dont le nom inclu les caractères tapés dans la barre de recherche --
    //declaration of a constante which stock the filtered array of pokemons when the name includes inputs entered in the searchbar
    let filtered = this.state.pokemons.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.needle.toLowerCase());
    });
    //met à jour les states de la valeur recherchée et du tableau filtré -- update states of search value and filtered array
    this.setState({ needle: event.target.value });
    this.setState({ filteredPokemons: filtered });
  }

  //#2 //#5 //#10
  render() {
    return (
      <div className="Pokecall">
        <img src={this.state.pokemons.sprites.front_default} />
        <ul>
          <li>
            ID: <strong>{this.state.pokemons.id}</strong>
          </li>
          <li>
            Name: <strong>{this.state.pokemons.name}</strong>
          </li>
          <li>
            height: <strong>{this.state.pokemons.height}</strong>
          </li>
          <li>
            weight: <strong>{this.state.pokemons.weight}</strong>
          </li>
          <li>
            types:
            {this.state.pokemons.types.map((obj) => {
              return (
                <p>
                  <strong>{obj.type.name}</strong>
                </p>
              );
            })}
          </li>
          <li>
            stats:
            {this.state.pokemons.stats.map((obj) => {
              return (
                <p>
                  <strong>
                    {obj.stat.name}: {obj.base_stat}
                  </strong>
                </p>
              );
            })}
          </li>
          <li>
            moves:
            {this.state.pokemons.moves.map((obj) => {
              {
                obj.version_group_details.map((array) => {
                  return <p> {array.version_group.name}</p>;
                });
              }
            })}
          </li>
        </ul>
      </div>
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
<li>
            moves :
            {this.state.pokemons.moves.map((obj) => {
              {
                obj.version_group_details.map((obj2) => {
                  return <p>{obj2.version_group.name}</p>;
                });
              }
            })}
          </li>*/
