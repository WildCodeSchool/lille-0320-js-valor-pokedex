import React from "react";
import "./Bandeau.css";
/* allows to integrate a background-image with pikachu which runs above */
/*permet d'intégrer une backgroud-image avec pikachu qui court au dessus*/
function Bandeau() {
  return (
    <div className="bandeau">
      <img src="/img/pikachu.gif" alt="pikachu" className="pikachu" />
    </div>
  );
}

export default Bandeau;
