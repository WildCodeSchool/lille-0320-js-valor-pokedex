import React from "react";
import axios from "axios";
import IdCard from "./Idcard";

/*const onePokemon = {
  url: "https://pokeapi.co/api/v2/pokemon/1/",
};*/

/*fonction URL pour sortir les url de data*/
const URL = (obj) => {
  return (
    <div>
      <p>{obj.url}</p>
    </div>
  );
};

class Extract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: { name: "carapuce", url: " " }, // faire avec le live de loic
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      // extrait les data de l'api et l'enregistre dans reponse
      .then((response) => response.data.results)
      // utilise le data pour mettre à jour le state
      .then((data) => {
        console.log(data); //permet de vérifier les données dans la console
      });
  }
  render() {
    return;
    <div>
      <p>
        {this.getPokemon()}
        <p />
        <p>blablabla</p>
        /*
        <URL obj={this.state.pokemon} />
        ;*/
      </p>
    </div>;
  }
}

export default Extract;

/* const adress = () => (
      <div>
        {this.state.pokemon.map((url) => {
          return console.log(url);
        })}
      </div>
    );
  }*/
