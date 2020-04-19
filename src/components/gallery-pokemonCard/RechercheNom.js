import React from "react";
import axios from "axios";

class RechercheNom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      url: props.url,
      data: {},
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API -- API request
    axios
      .get(this.state.url)
      // extrait l'url du pokemon pris avant dans gallery -- taking pokemon's url from gallery
      .then((response) => response.data)
      // utilise le data pour mettre à jour le state -- using data to up to date the state
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }

  RechercheHandleChange(event) {
    this.setState({ title: event.target.searchValue });
  }

  render() {
    return (
      <div>
        <label htmlFor="search">Title :</label>
        <input
          id="search"
          type="text"
          name="searchBar"
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default RechercheNom;
