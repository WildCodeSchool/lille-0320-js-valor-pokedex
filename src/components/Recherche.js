import React from "react";

class Recherche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needle: "",
    };
    this.handleChange = this.handleChange.bind(this);
    /*this.searchPokemon = this.searchPokemon.bind(this);*/
  }

  handleChange(event) {
    this.setState({ needle: event.target.value });
  }

  /*displayPokemon(event) {
    const display = TestPokemon.forEach((pokemon) => {
      return (
        
      );
    });
    return display;
  }*/

  /*searchPokemon(event) {
    dkzajb.filter((pokemon) => {
      return dkzajb.name.includes(this.state.needle);
    });
  }*/

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
        <div>
          <h3 className="name">{this.props.name}</h3>
          <p className="pokemonId">{this.props.id}</p>
          <img src={this.props.url} alt={this.props.name} />
        </div>
      </div>
    );
  }
}

export default Recherche;
