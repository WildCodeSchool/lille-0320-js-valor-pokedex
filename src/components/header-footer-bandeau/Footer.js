import React from "react";
import "./Footer.css";
/*allows to insert our logo "team valor" in the footer */
/*permet d'insérer notre logo "team valor" dans le footer*/
function Footer() {
  return (
    <footer>

      <div className="footer">


     
      <img src="/img/teamvalor.png" alt="logo valor" className="valorLogo"/>

<div className="footerLinks">


<div className="projets">
  <ul><h3>Other web projects:</h3>
    <li>V'Lille</li>
    <li>Video Game</li>
  </ul>
</div>


<div className="team">
  <ul><h3>Team:</h3>
    <li>Benjamin</li>
    <li>Bérénice</li>
    <li>Ghazali</li>
    <li>Roxanne</li>
    <li>Sophie</li>
  </ul>
</div>



</div>



      </div>
    </footer>
  );
}

export default Footer;
