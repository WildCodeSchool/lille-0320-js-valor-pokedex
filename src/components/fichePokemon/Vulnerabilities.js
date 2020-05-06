import React from "react";
import axios from "axios";

class Vulnerabilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonTypes: [
        {
          name: "",
          damage_relations: {
            double_damage_from: [{ name: "" }],
            half_damage_from: [{ name: "" }],
            no_damage_from: [{ name: "" }],
          },
        },
      ],
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
          console.log("two", data);
        });
    }
  }

  displayTypes() {
    /*console.log(this.state.pokemonTypes);*/
  }

  render() {
    console.log("three", this.state.pokemonTypes[0]);
    return (
      <div>
        {console.log("test", this.props.types)}
        {this.props.types.map((obj) => {
          return <p key={obj.type.name}>{obj.type.name}</p>;
        })}

        {this.state.pokemonTypes[0].name &&
          this.state.pokemonTypes.map((obj) => {
            return obj.damage_relations.map((relation) => {
              return relation.map((type) => {
                return <p key={type.name}>{type.name}</p>;
              });
            });
          })}
        {this.state.pokemonTypes ? (
          <p>loading</p>
        ) : (
          this.state.pokemonTypes.map((obj) => {
            return <p key={obj.name}>{obj.id}</p>;
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
