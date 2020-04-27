import React from "react";

function DescriptionPokemonCard({ pokemon }) {
  return (
    <div className="fiche">
      <div>
        description :
        {pokemon.flavor_text_entries &&
          pokemon.flavor_text_entries
            .filter((language) => {
              return (
                language.language.name === "en" && language.version.name === "x"
              );
            })
            .map((obj) => {
              console.log(obj);
              return <p>{obj.flavor_text}</p>;
            })}
      </div>
    </div>
  );
}

export default DescriptionPokemonCard;
