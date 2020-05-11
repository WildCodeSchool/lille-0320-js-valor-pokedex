import React from "react";
import axios from "axios";
import "./styles/vulnerabilites.css";

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
    //we put one or both Pokemon types in obj1 and obj2
    const obj1 = this.props.types[0];
    const obj2 = this.props.types[1];
    //we call the API at the type endpoint, using the correct type name
    axios
      .get(`https://pokeapi.co/api/v2/type/${obj1.type.name}`)
      .then(({ data }) => {
        this.setState({
          pokemonType1: data,
        });
      });
    //if there are two types, the second one is called here
    if (this.props.types[1]) {
      axios
        .get(`https://pokeapi.co/api/v2/type/${obj2.type.name}`)
        .then(({ data }) => {
          this.setState({
            pokemonType2: data,
          });
        });
    }
  }

  //a method to build the weakness table if there are two types
  doubleType() {
    //we put all the interactions we need for each type in a new const
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

    //we gather all the types which interact with our two types and keep only one of them if they appear multiple times
    let allTypes = [...noEffect1]
      .concat([...noEffect2])
      .concat([...doubleEffect1])
      .concat([...doubleEffect2])
      .concat([...halfEffect1])
      .concat([...halfEffect2])
      .filter((obj, i, allT) => {
        return allT.indexOf(obj) === i;
      });

    //we create const which will gather ready-to-use values
    const effect0 = [],
      effect25 = [],
      effect50 = [],
      effect200 = [],
      effect400 = [];

    //for each type of allTypes, we see for each interaction which one fits the type, beggining with immunity and doubling-down interactions
    allTypes.forEach((type) => {
      if (noEffect1.includes(type) || noEffect2.includes(type))
        effect0.push(type);
      else if (doubleEffect1.includes(type) && doubleEffect2.includes(type))
        effect400.push(type);
      else if (halfEffect1.includes(type) && halfEffect2.includes(type))
        effect25.push(type);
      else if (
        (doubleEffect1.includes(type) && !halfEffect2.includes(type)) ||
        (doubleEffect2.includes(type) && !halfEffect1.includes(type))
      )
        effect200.push(type);
      else if (
        (!doubleEffect1.includes(type) && halfEffect2.includes(type)) ||
        (!doubleEffect2.includes(type) && halfEffect1.includes(type))
      )
        effect50.push(type);
    });

    //we return the final code for the component to display
    return (
      <div className="table">
        <ul className="vulneUl right-border eff400">
          <p className="effective">
            Very Effective
            <br /> (x4)
          </p>
          {effect400.map((type) => {
            return (
              <li key={type} className={("types", type)}>
                {type}
              </li>
            );
          })}
        </ul>
        <ul className="vulneUl right-border left-border eff200">
          <p className="effective">
            Super Effective
            <br /> (x2)
          </p>
          {effect200.map((type) => {
            return (
              <li key={type} className={("types", type)}>
                {type}
              </li>
            );
          })}
        </ul>
        <ul className="vulneUl right-border left-border eff50">
          <p className="effective">
            Not very
            <br /> effective (x0.5)
          </p>
          {effect50.map((type) => {
            return (
              <li key={type} className={("types", type)}>
                {type}
              </li>
            );
          })}
        </ul>
        <ul className="vulneUl right-border left-border eff25">
          <p className="effective">
            Not effective
            <br /> (x0.25)
          </p>
          {effect25.map((type) => {
            return (
              <li key={type} className={("types", type)}>
                {type}
              </li>
            );
          })}
        </ul>
        <ul className="vulneUl left-border eff0">
          <p className="effective">
            Immunity
            <br /> (x0)
          </p>
          {effect0.map((type) => {
            return (
              <li key={type} className={("types", type)}>
                {type}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="vulnerabilities">
        {
          //if there is only one type, we just give the raw data
          this.props.types[1] ? (
            this.doubleType()
          ) : (
            <div className="table">
              <ul className="vulneUl right-border eff400">
                <p className="effective">
                  Very Effective
                  <br /> (x4)
                </p>
              </ul>
              <ul className="vulneUl right-border left-border eff200">
                <p className="effective">
                  Super Effective
                  <br /> (x2)
                </p>
                {this.state.pokemonType1.damage_relations.double_damage_from.map(
                  (type) => {
                    return (
                      <li key={type.name} className={("types", type.name)}>
                        {type.name}
                      </li>
                    );
                  }
                )}
              </ul>
              <ul className="vulneUl right-border left-border eff50">
                <p className="effective">
                  Not very
                  <br /> effective (x0.5)
                </p>
                {this.state.pokemonType1.damage_relations.half_damage_from.map(
                  (type) => {
                    return (
                      <li key={type.name} className={("types", type.name)}>
                        {type.name}
                      </li>
                    );
                  }
                )}
              </ul>
              <ul className="vulneUl right-border left-border eff25">
                <p className="effective">
                  Not effective
                  <br /> (x0.25)
                </p>
              </ul>
              <ul className="vulneUl left-border eff0">
                <p className="effective">
                  Immunity
                  <br /> (x0)
                </p>
                {this.state.pokemonType1.damage_relations.no_damage_from.map(
                  (type) => {
                    return (
                      <li key={type.name} className={("types", type.name)}>
                        {type.name}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          )
        }
      </div>
    );
  }
}

export default Vulnerabilities;
