import React from "react";
import "./Bandeau.css";
import pikachu from "/img/pikachu.gif";

function Bandeau() {
  return (
    <div className="bandeau">
      <img src={pikachu} alt="pikachu" className="pikachu" />
    </div>
  );
}

export default Bandeau;
