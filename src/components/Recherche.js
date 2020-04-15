import React from "react";

class Recherche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        needle: ""
    };
  }

  handleChange(event) {
    this.setState({ needle: event.target.value });
  }

  render() {
    return (
        <h2>Recherche</h2>
        <input 
            id="getNameOrNumber" 
            type="text"
            value={this.state.needle}
            onChange={this.handleChange}
        />
    );
  }
}

export default Recherche;
