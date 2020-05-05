import React from "react";
import axios from "axios";

class Vulnerabilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonTypes: [],
    };
    this.displayTypes = this.displayTypes.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < this.props.types.length; i++) {
      const obj = this.props.types[i];
      axios
        .get(`https://pokeapi.co/api/v2/type/${obj.type.name}`)
        .then(({ data }) => {
          this.setState({
            pokemonTypes: data,
          });
          console.log("two", this.state.pokemonTypes);
        });
    }
  }

  displayTypes() {
    console.log(this.state.pokemonTypes);
  }

  render() {
    return (
      <div>
        <h2>Hello</h2>
        <p>World</p>
        {console.log(this.pokemonTypes)}
        {this.props.types.map((obj) => {
          return <p key={obj.type.name}>{obj.type.name}</p>;
        })}
        {!this.pokemonTypes ? (
          <p>loading</p>
        ) : (
          this.pokemonTypes.map((obj) => {
            return <p key={obj.name}>{obj.name}</p>;
          })
        )}
        <input type="button" onClick={() => this.displayTypes} value="log" />
      </div>
    );
  }
}

export default Vulnerabilities;

/*{this.state.types.map((obj, i) => {
          return <p key={i}>{obj.type.</p>
        })} */
