import React from "react";
import "./Footer.css";

/*allows to insert our logo "team valor" in the footer */
/*permet d'insérer notre logo "team valor" dans le footer*/
function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src="/img/teamvalor.png" alt="logo valor" className="valorLogo" />

        <div className="footerLinks">
          <div className="team1">
            <div>
              <p className="p">Bérénice</p>
              <img src="/img/berenice.png" alt="Berenice" className="avatar" />
            </div>

            <div>
              <p className="p">Ghazali</p>
              <img src="/img/ghazali.png" alt="Ghazali" className="avatar" />
            </div>

            <div>
              <p className="p">Roxane</p>
              <img
                src="/img/roxane.png"
                alt="Roxanne"
                className="avatar"
                className="avatar"
              />
            </div>

            <div>
              <p className="p">M. Brassart</p>
              <img
                src="/img/mbrassart.png"
                alt="M Brassart"
                className="avatar"
              />
            </div>
          </div>

          <div className="projets">
            <h3>Other web projects:</h3>
            <ul>
              <li>V'Lille</li>
              <li>Video Game</li>
            </ul>
          </div>

          <div className="team2">
            <div>
              <p className="p">Gilles</p>
              <img src="/img/gilles.png" alt="Gilles" className="avatar" />
            </div>

            <div>
              <p className="p">Sophie</p>
              <img src="/img/sophie.png" alt="Sophie" className="avatar" />
            </div>

            <div>
              <p className="p">Valentin</p>
              <img src="/img/valentin.png" alt="Valentin" className="avatar" />
            </div>

            <div>
              <p className="p">Benjamin</p>
              <img src="/img/benjamin.png" alt="Benjamin" className="avatar" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
