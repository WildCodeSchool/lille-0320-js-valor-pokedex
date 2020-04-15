import React from "react";
import "./Bandeau.css";
import background from "./background-top.jpg";
import pikachu from "./pikachu.gif";

function Bandeau() {
  return (
    <div className="bandeau">
      <img src={pikachu} alt="pikachu" className="pikachu" />
    </div>
  );
}

export default Bandeau;

//mettre le background en image ou l'importer dans le css en background-image.
