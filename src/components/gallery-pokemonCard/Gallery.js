import React from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import "./Gallery.css";
import { Link } from "react-router-dom";
import RechercheNom from "./RechercheNom";
import Filtre from "./Filtre";
import Footer from "../header-footer-bandeau/Footer";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 649,
      pokemons: [],
      filteredPokemons: [],
      pokeDay: {},
      i: 0,
      j: 50,
      searchBar: "",
      type1: "",
      type2: "",
      pokedexActive: false,
    };
    this.filtreHandleChange = this.filtreHandleChange.bind(this);
    this.applyFiltre = this.applyFiltre.bind(this);
  }

  //appelle l'APi après le premier rendu pour éviter la page blanche au démarrage -- call the API after the first render to avoid the white page
  componentDidMount() {
    this.getPokemon();
    this.getPokeDay();
  }

  getPokemon() {
    //demande de l'API -- API's request
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${this.state.limit}`
      )
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

  getPokeDay() {
    const randomPok = Math.floor(
      Math.random() * Math.floor(this.state.limit + 1)
    );
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomPok}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ pokeDay: data });
      });
  }

  filtreHandleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  } //filtre par type et nom -- filter by type and name
  applyFiltre() {
    // filtered commence avec l'ensemble de la liste des pokémon -- filtered starts with the whole pokémon list
    let filtered = this.state.pokemons; //si aucun filtre n'est appliqué, on renvoie tous les pokémon -- if no filter is applied, we return the whole list

    if (!this.state.searchBar && !this.state.type1 && !this.state.type2) {
      return this.setState({ filteredPokemons: filtered }); //si au moins un filtre du state est rempli, on regarde chaque filtre applicable possible -- if at lest one filter state is not empty, we look at every single filter possible
    } else {
      if (this.state.searchBar) {
        //on cherche les pokémon dont le nom contient les lettres contenues dans le state searchBar -- we search for pokémon with a name containing the letters from the state searchBar
        filtered = filtered.filter((pokemon) => {
          return pokemon.name
            .toLowerCase()
            .includes(this.state.searchBar.toLowerCase());
        }); //on change le state de filteredPokemons pour appliquer les changements (les pokémon retirés) et on change les valeurs du .slice pour retourner à la première page de la liste -- we update the filteredPokemons state to apply the modifications (retrieved pokémon) and we also change the state values of the .slice to go back to the first page when we apply a new filter
        this.setState({ filteredPokemons: filtered, i: 0, j: 50 });
      }
      if (this.state.type1) {
        //on appelle le endpoint du type souhaité -- we call the right API endpoint to access the right type
        axios
          .get(`https://pokeapi.co/api/v2/type/${this.state.type1}`)
          .then((response) => response.data)
          .then((data) => {
            filtered = filtered.filter((onePokemon) => {
              //on cherche si le pokémon regardé est dans la liste des pokémon ayant le type demandé -- we search for our pokémon in the type pokémon list
              let finding = data.pokemon
                .map((found) => {
                  return found.pokemon.name === onePokemon.name;
                }) //.find donne "undefined" si aucune apparition du nom est trouvé, et "true" si on en trouve une -- .find return "undefined" if no match is found, and "true" if there's one match
                .find((found) => found === true);
              return finding;
            });
            this.setState({ filteredPokemons: filtered, i: 0, j: 50 });
          });
      }
      if (this.state.type2) {
        axios
          .get(`https://pokeapi.co/api/v2/type/${this.state.type2}`)
          .then((response) => response.data)
          .then((data) => {
            filtered = filtered.filter((onePokemon) => {
              let finding = data.pokemon
                .map((found) => {
                  return found.pokemon.name === onePokemon.name;
                })
                .find((found) => found === true);
              return finding;
            });
            this.setState({ filteredPokemons: filtered, i: 0, j: 50 });
          });
      }
    }
  }
  addOne = () => {
    if (this.state.filteredPokemons.length + 50 > this.state.j + 50) {
      this.setState({ i: this.state.i + 50 });
      this.setState({ j: this.state.j + 50 });
    }
  }; //fonction lessOne permet de décrémenter de 50 i et j pour charger les 50 pokemons précédents -- lessOne function allows to decrement by 50 i and j to load the previous 50 pokemons //si i est différent de 0, décrémente de 50 pokémons. Sinon tu ne charges plus rien -- if i is different from 0, decrements by 50 pokémons. Otherwise you don't charge anything
  lessOne = () => {
    if (this.state.i !== 0) {
      this.setState({ i: this.state.i - 50 });
      this.setState({ j: this.state.j - 50 });
    }
  };

  render() {
    return (
      <div className="page">
        <div className="recherche-nom">
          <div
            className={
              this.state.pokedexActive ? "pokedex" : "pokedex-desactive"
            }
          >
            {/*appelle RechercheNom en envoyant les props de rechercheHandleChange -- call RechercheNom sending rechercheHandleChange's props*/}
            <div
              className={
                this.state.pokedexActive
                  ? "searchByName-active"
                  : "searchByName-desactive"
              }
            >
              <div className="leftBloc">
                {this.state.pokeDay.name && (
                  <Link to={`/Pokemon/${this.state.pokeDay.name}`}>
                    <div className="pokeDay">
                      <img
                        src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.pokeDay.id}.png`}
                        alt={this.state.pokeDay.name}
                        className="imgDay"
                      />
                      <p>{this.state.pokeDay.name}</p>
                    </div>
                  </Link>
                )}
                                   
              </div>
              <div className="rightBloc">
                                
                {/*appelle RechercheNom et Filtre en envoyant les props de filtreHandleChange -- call RechercheNom and Filtre sending filtreHandleChange's props*/}
                                
                <RechercheNom filtreHandleChange={this.filtreHandleChange} />
                                
                <Filtre filtreHandleChange={this.filtreHandleChange} />
                                
                {/*we apply the requested changes on this button click*/}
                                
                <button
                  className="filterButton"
                  onClick={() => this.applyFiltre()}
                >
                  GO
                </button>
                              
              </div>
            </div>
            {/*affiche un nouveau tableau à partir du tableau filtré -- pin up a new array based on the filtered array*/}
          </div>
          <div className="button hideButton">
            <div
              className="shape"
              onClick={() => {
                const hide = !this.state.pokedexActive;
                this.setState({ pokedexActive: hide });
              }}
            ></div>
            <div className="hideButton">
              <div
                className="txtButton"
                onClick={() => {
                  const hide = !this.state.pokedexActive;
                  this.setState({ pokedexActive: hide });
                }}
              >
                {this.state.pokedexActive
                  ? "DISABLE ADVANCED POKEDEX RESEARCHES"
                  : "ENABLE ADVANCED POKEDEX RESEARCHES"}
              </div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="bloc-gallery">
            <div className="pokemon-cards">
              {this.state.filteredPokemons
                .slice(this.state.i, this.state.j)
                .map((pokemon, index) => {
                  return (
                    <Link to={`/Pokemon/${pokemon.name}`} key={index}>
                      <PokemonCard {...pokemon} />
                    </Link>
                  );
                })}
            </div>
          </div>
          {/*on peut changer de page pour afficher les 50 pokémon suivants -- we can change the page to see the 50 next pokémon on the list*/}
          <div className="buttonGallery">
                      
            <button className="button1" onClick={this.lessOne}>
              Prev.           
            </button>
                     
            <button className="button2" onClick={this.addOne}>
              Next           
            </button>
                 
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gallery;
