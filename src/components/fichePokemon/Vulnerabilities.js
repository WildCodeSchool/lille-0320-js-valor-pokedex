import React from "react";
import axios from "axios";

class Vulnerabilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonTypes: [
        {
          pokemonType1: {
            name: "loading",
            damage_relations: {
              double_damage_from: [{ name: "" }],
              half_damage_from: [{ name: "" }],
              no_damage_from: [{ name: "" }],
            },
          },
        },
        {
          pokemonType2: {
            name: "loading",
            damage_relations: {
              double_damage_from: [{ name: "" }],
              half_damage_from: [{ name: "" }],
              no_damage_from: [{ name: "" }],
            },
          },
        },
      ],
    };
  }

  componentDidMount() {
    //const obj1 appel le premier type
    const obj1 = this.props.types[0];
    //const obj2appel le 2nd type
    const obj2 = this.props.types[1];
    //va chercher les données du premier type dans l'api
    // et stock le dans pokemonType1
    axios
      .get(`https://pokeapi.co/api/v2/type/${obj1.type.name}`)
      .then(({ data }) => {
        this.setState({
          pokemonType1: data,
        });
        console.log("one", this.state.pokemonType1);
      });
    //si tu as plusieurs types, va chercher les données du 2nd dans l'api
    //stock le dans pokemonType2
    if (this.props.types[0].type.name) {
      axios
        .get(`https://pokeapi.co/api/v2/type/${obj2.type.name}`)
        .then(({ data }) => {
          this.setState({
            pokemonType2: data,
          });
          console.log("two", this.state.pokemonType2);
        });
    }
  }

  render() {
    console.log("three", this.state.pokemonTypes[0]);
    return (
      <div>
        {this.props.types.map((obj) => {
          return <p key={obj.type.name}>{obj.type.name}</p>;
        })}
        {this.state.pokemonTypes[0].name !== "loading" &&
          this.state.pokemonTypes.map((array) => {
            return array.map((obj, i) => {
              return <p key={i}>{obj.name}</p>;
            });
          })}
      </div>
    );
  }
}

export default Vulnerabilities;
