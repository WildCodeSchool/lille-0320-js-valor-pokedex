import React from "react";

function DescriptionPokemonCard({ pokemon }) {
  return (
    <div className="description">
      {pokemon.flavor_text_entries &&
        pokemon.flavor_text_entries
          .filter((language) => {
            return (
              language.language.name === "en" && language.version.name === "x"
            );
          })
          .map((obj) => {
            return (
              <p key={obj.i} className="descriptionText">
                {obj.flavor_text}
              </p>
            );
          })}
    </div>
  );
}

export default DescriptionPokemonCard;
