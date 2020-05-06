import React from "react";
import axios from "axios";

class Vulnerabilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonType1: {
        name: "loading",
        damage_relations: {
          double_damage_from: [{ name: "" }],
          half_damage_from: [{ name: "" }],
          no_damage_from: [{ name: "" }],
        },
      },

      pokemonType2: {
        name: "loading",
        damage_relations: {
          double_damage_from: [{ name: "" }],
          half_damage_from: [{ name: "" }],
          no_damage_from: [{ name: "" }],
        },
      },
    };
    this.doubleType = this.doubleType.bind(this);
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
    if (this.props.types[1]) {
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

  doubleType() {
    let noEffect1 = this.state.pokemonType1.damage_relations.no_damage_from.map(
      (obj) => {
        return obj.name;
      }
    );
    let noEffect2 = this.state.pokemonType2.damage_relations.no_damage_from.map(
      (obj) => {
        return obj.name;
      }
    );
    let doubleEffect1 = this.state.pokemonType1.damage_relations.double_damage_from.map(
      (obj) => {
        return obj.name;
      }
    );
    let doubleEffect2 = this.state.pokemonType2.damage_relations.double_damage_from.map(
      (obj) => {
        return obj.name;
      }
    );
    let halfEffect1 = this.state.pokemonType1.damage_relations.half_damage_from.map(
      (obj) => {
        return obj.name;
      }
    );
    let halfEffect2 = this.state.pokemonType2.damage_relations.half_damage_from.map(
      (obj) => {
        return obj.name;
      }
    );

    let allTypes = [...noEffect1]
      .concat([...noEffect2])
      .concat([...doubleEffect1])
      .concat([...doubleEffect2])
      .concat([...halfEffect1])
      .concat([...halfEffect2])
      .filter((obj, i, allT) => {
        return allT.indexOf(obj) === i;
      });

    const effect0 = [],
      effect25 = [],
      effect50 = [],
      effect200 = [],
      effect400 = [];

    console.log("bonjour", noEffect1.includes(allTypes[0]));

    allTypes.forEach((type) => {
      switch (type) {
        case noEffect1.includes(type) || noEffect2.includes(type):
          effect0.push(type);
          break;
        case doubleEffect1.includes(type) && doubleEffect2.includes(type):
          effect400.push(type);
          break;
        case halfEffect1.includes(type) && halfEffect2.includes(type):
          effect25.push(type);
          break;
        case (doubleEffect1.includes(type) && !halfEffect2.includes(type)) ||
          (doubleEffect2.includes(type) && !halfEffect1.includes(type)):
          effect200.push(type);
          break;
        case (!doubleEffect1.includes(type) && halfEffect2.includes(type)) ||
          (!doubleEffect2.includes(type) && halfEffect1.includes(type)):
          effect50.push(type);
          break;
        default:
          console.log(type, "is neutral");
      }
    });

    return effect400.map((obj, i) => {
      return <p key={i}>{obj}</p>;
    });
  }

  render() {
    return <div>{this.doubleType()}</div>;
  }
}

export default Vulnerabilities;

/*{this.props.types[1]
          ? this.doubleType
          : this.props.types.map((obj) => {
              return <p key={obj.type.name}>{obj.type.name}</p>;
            })}
        {this.state.pokemonType1.damage_relations.double_damage_from.map(
          (obj, i) => {
            return <p key={i}>{obj.name}</p>;
          }
        )}
        {this.state.pokemonType1.damage_relations.half_damage_from.map(
          (obj, i) => {
            return <p key={i}>{obj.name}</p>;
          }
        )}
        {this.state.pokemonType1.damage_relations.no_damage_from.map(
          (obj, i) => {
            return <p key={i}>{obj.name}</p>;
          }
        )}

        {this.state.pokemonType2.damage_relations.double_damage_from.map(
          (obj, i) => {
            return <p key={i}>{obj.name}</p>;
          }
        )}*/
