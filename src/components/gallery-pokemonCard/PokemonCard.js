import React from "react";
import axios from "axios";
import "./PokemonCard.css";

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}, // Si le state n'est mis à jour que dans le constructeur, les infos affichées qui en dépendent ne changeront jamais
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  componentDidUpdate(oldProps) {
    // Boucle infinie ! Chaque cDU declenche un setState, qui declenche un render et un cDU, qui... (J'ai du reboot mon PC encore -_-)
    if (oldProps.url !== this.props.url) {
      this.getPokemon();
    }
  }

  getPokemon() {
    //demande de l'API -- API request
    axios
      .get(this.props.url)
      // extrait l'url du pokemon pris avant dans gallery -- taking pokemon's url from gallery
      .then((response) => response.data)
      // utilise le data pour mettre à jour le state -- using data to up to date the state
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }
  render() {
    /*on crée une carte de pokemon qui va afficher la photo, le numéro et le nom de chaque pokemon -- creation of a card that will show a picture, number and name of each pokemon*/

    /*on fait un ternaire pour que la carte s'applique à chaque pokemon. Si le pokemon à un id, renvoi la carte, sinon renvoi "loading" -- we create a ternary to let the card applying for all the pokemon. if the pokemon have an id, show the card, else show "loading"
    le ternaire est nécessaire car la class renvoi le render, puis fait appel à l'api puis re renvoi le render. -- the ternary is necessary because the class show the render, then ask then reshow the render*/
    return (
      <div className="allCar">
        {this.state.data.id ? (
          <div className="global">
            <div>
              {this.state.data.id <= 151 ? (
                <img src="/img/G1.png" alt="g1" className="badge" />
              ) : (
                ""
              )}
              {this.state.data.id <= 251 && this.state.data.id > 151 ? (
                <img src="/img/G2.png" alt="g2" className="badge" />
              ) : (
                ""
              )}
              {this.state.data.id <= 386 && this.state.data.id > 251 ? (
                <img src="/img/G3.png" alt="g3" className="badge" />
              ) : (
                ""
              )}
              {this.state.data.id <= 493 && this.state.data.id > 386 ? (
                <img src="/img/G4.png" alt="g4" className="badge" />
              ) : (
                ""
              )}
              {this.state.data.id <= 649 && this.state.data.id > 493 ? (
                <img src="/img/G5.png" alt="g5" className="badge" />
              ) : (
                ""
              )}

              <img
                src={this.state.data.sprites.front_default}
                alt={this.state.data.name}
                className="carte"
              />
            </div>
            <p className="titre">
              {this.state.data.id} {this.state.data.name}
            </p>
          </div>
        ) : (
          <div className="global">
            <img
              src="/img/pokeball-loading.png"
              alt="pokeball"
              className="pokeball"
            />
            <p className="titre">loading</p>
          </div>
        )}
      </div>
    );
  }
}

export default PokemonCard;
