import React from "react";
import axios from "axios";

class Vulnerabilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonTypes: [],
    };
  }

  async componentDidMount() {
    const callTypes = await this.props.types.map((obj) => {
      console.log("three", obj);
      axios
        .get(`https://pokeapi.co/api/v2/type/${obj.type.name}`)
        .then(({ data }) => {
          console.log("one", data.results);
          this.setState({
            pokemonTypes: data.results,
          });
          console.log("two", this.state.pokemonTypes);
        });
    });
  }

  componentDidUpdate() {
    console.log("four", this.props.types);
  }

  render() {
    return (
      <div>
        <h2>Hello</h2>
        <p>World</p>
        {this.props.types.map((obj) => {
          return <p key={obj.type.name}>{obj.type.name}</p>;
        })}
      </div>
    );
  }
}

export default Vulnerabilities;

/*{this.state.types.map((obj, i) => {
          return <p key={i}>{obj.type.</p>
        })} */
