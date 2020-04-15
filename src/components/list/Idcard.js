import React from "react";

function IdCard({ pokemon }) {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>
        {pokemon.id} {pokemon.name}
      </p>
    </div>
  );
}

export default IdCard;
