import React from "react";

function DescriptionPokemonCard({ pokemon }) {
  return (
    <div>
      <div className="descriptionButtons">
        <img src="/img/G1.png" alt="g1" width="30px" />
        <img src="/img/G2.png" alt="g2" width="30px" />
        <img src="/img/G3.png" alt="g3" width="30px" />
        <img src="/img/G4.png" alt="g4" width="30px" />
        <img src="/img/G5.png" alt="g5" width="30px" />
      </div>
      <div className="description">
        {pokemon.flavor_text_entries &&
          pokemon.flavor_text_entries
            .filter((language) => {
              return (
                language.language.name === "en" &&
                language.version.name === "red"
              );
            })
            .map((obj, i) => {
              return (
                <p key={i} className="descriptionText">
                  {obj.flavor_text}
                </p>
              );
            })}
      </div>
      <div>
        {pokemon.flavor_text_entries &&
          pokemon.flavor_text_entries
            .filter((language) => {
              return (
                language.language.name === "en" &&
                language.version.name === "gold"
              );
            })
            .map((obj, i) => {
              return (
                <p key={i} className="descriptionText">
                  {obj.flavor_text}
                </p>
              );
            })}
      </div>

      <div>
        {pokemon.flavor_text_entries &&
          pokemon.flavor_text_entries
            .filter((language) => {
              return (
                language.language.name === "en" &&
                language.version.name === "ruby"
              );
            })
            .map((obj, i) => {
              return (
                <p key={i} className="descriptionText">
                  {obj.flavor_text}
                </p>
              );
            })}
      </div>

      <div>
        {pokemon.flavor_text_entries &&
          pokemon.flavor_text_entries
            .filter((language) => {
              return (
                language.language.name === "en" &&
                language.version.name === "diamond"
              );
            })
            .map((obj, i) => {
              return (
                <p key={i} className="descriptionText">
                  {obj.flavor_text}
                </p>
              );
            })}
      </div>

      <div>
        {pokemon.flavor_text_entries &&
          pokemon.flavor_text_entries
            .filter((language) => {
              return (
                language.language.name === "en" &&
                language.version.name === "black"
              );
            })
            .map((obj, i) => {
              return (
                <p key={i} className="descriptionText">
                  {obj.flavor_text}
                </p>
              );
            })}
      </div>
    </div>
  );
}

export default DescriptionPokemonCard;
