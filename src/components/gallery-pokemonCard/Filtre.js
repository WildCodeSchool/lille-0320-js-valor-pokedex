import React, { useState, useEffect } from "react";
import axios from "axios";

function Filtre(props) {
  const [allTypes, setAllTypes] = useState([]);

  //appelle l'api pour avoir les filtres -- API call to get all the types
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type/`).then(({ data }) => {
      setAllTypes(data.results);
    });
  }, []);

  return (
    <div>
      <select
        className="selectFiltre"
        name="type1"
        onChange={props.filtreHandleChange}
      >
        {/*filtre pour garder tous les types sauf unknown et shadow puis les retourne en une liste d'options pour les deux selects -- we filter the types to throw away "unknown" and "shadow" and then return option lists for both selects*/}
        <option value="">-Pick a type-</option>
        {allTypes &&
          allTypes
            .filter((type) => {
              return type.name !== "unknown" && type.name !== "shadow";
            })
            .map((type, i) => (
              <option key={i} value={type.name}>
                {type.name}
              </option>
            ))}
      </select>
      <select
        className="selectFiltre"
        name="type2"
        onChange={props.filtreHandleChange}
      >
        <option value="">-Pick a type-</option>
        {allTypes &&
          allTypes
            .filter((type) => {
              return type.name !== "unknown" && type.name !== "shadow";
            })
            .map((type, i) => (
              <option key={i} value={type.name}>
                {type.name}
              </option>
            ))}
      </select>
    </div>
  );
}

export default Filtre;
