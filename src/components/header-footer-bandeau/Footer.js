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

<div className="team1">
  <div>
  <p>Bérénice</p>
  <img src="/img/berenice.png" alt="Berenice" width="100px"/>
    </div>

    <div>
  <p>Ghazali</p>
  <img src="/img/ghazali.png" alt="Ghazali" width="100px"/>
    </div>

    <div>
  <p>Roxanne</p>
  <img src="/img/roxanne.png" alt="Roxanne" width="100px"/>
    </div>

</div>


<div className="projets">
  
  <ul><h3>Other web projects:</h3>
    <li>V'Lille</li>
    <li>Video Game</li>
  </ul>
</div>


<div className="team2">
  <div>
  <p>Sophie</p>
  <img src="/img/sophie.png" alt="Sophie" width="100px"/>
    </div>

    <div>
  <p>Valentin</p>
  <img src="/img/valentin.png" alt="Valentin" width="100px"/>
    </div>

    <div>
  <p>Benjamin</p>
  <img src="/img/benjamin.png" alt="Benjamin" width="100px"/>
    </div>

</div>



</div>



      </div>
    </footer>
  );
}

export default Footer;
