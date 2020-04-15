import React from "react";
import TestPokemon from "./TestPokemon";

class Recherche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needle: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
  }

  handleChange(event) {
    this.setState({ needle: event.target.value });
  }

  searchPokemon(event) {
    dkzajb.filter((pokemon) => {
      return name.includes(needle);
    });
  }

  render() {
    return (
      <div>
        <h2>Recherche</h2>
        <input
          id="getNameOrNumber"
          type="text"
          value={this.state.needle}
          onChange={this.handleChange}
        />
        <div>{this.searchPokemon}</div>
      </div>
    );
  }
}

export default Recherche;
