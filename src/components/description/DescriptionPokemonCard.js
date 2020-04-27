import React from "react";

function DescriptionPokemonCard({ pokemon }) {
  return (
    <div className="fiche">
      <div>
        description :
        {pokemon.flavor_text_entries.map((obj) => {
          console.log(obj);
          return <p>{obj.flavor_text}</p>;
        })}
      </div>
    </div>
  );
}

export default DescriptionPokemonCard;
