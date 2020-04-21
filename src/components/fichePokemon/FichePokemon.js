import React from "react";
import axios from "axios";
import "./FichePokemon.css";

class FichePokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      id: props.id,
      data: props.data,
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API -- API request
    axios.get(this.state.data).then(({ id }) => {
      console.log(id);

      this.setState({
        pokemons: id,
      });
    });
  }
  render() {
    /*on crée une carte de pokemon qui va afficher la photo, le numéro et le nom de chaque pokemon -- creation of a card that will show a picture, number and name of each pokemon*/

    /*on fait un ternaire pour que la carte s'applique à chaque pokemon. Si le pokemon à un id, renvoi la carte, sinon renvoi "loading" -- we create a ternary to let the card applying for all the pokemon. if the pokemon have an id, show the card, else show "loading"
      le ternaire est nécessaire car la class renvoi le render, puis fait appel à l'api puis re renvoi le render. -- the ternary is necessary because the class show the render, then ask then reshow the render*/
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default FichePokemon;
