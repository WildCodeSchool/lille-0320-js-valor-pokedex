import React from "react";
import "./List.css";
import IdCard from "./Idcard";
import axios from "axios";

const onePokemon = {
  name: "Pikachu",
  id: 25,
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: onePokemon, // faire avec le live de loic
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1/")
      // extrait les data de l'api et l'enregistre dans reponse
      .then((response) => response.data)
      // utilise le data pour mettre à jour le state
      .then((data) => {
        console.log(data); //permet de vérifier les données dans la console
        this.setState({
          pokemon: data,
        });
      });
  }
  render() {
    return (
      <div>
        <IdCard pokemon={this.state.pokemon} />
        <button
          type="button"
          onClick={() => {
            this.getPokemon();
          }}
        >
          change quote
        </button>
      </div>
    );
  }
}

/*const Selection = () => (
  <div>
    {Couture.map(item => (
      <Menu
      image={item.image}
      titre={item.titre}
    />
  ))}
  </div>
  
);*/

export default List;
