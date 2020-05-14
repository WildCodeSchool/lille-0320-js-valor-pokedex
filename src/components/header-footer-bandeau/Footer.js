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
              <a
                href="https://github.com/berenice89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/berenice.png"
                  alt="Berenice"
                  className="avatar"
                />
              </a>
            </div>

            <div>
              <p className="p">Ghazali</p>
              <a
                href="https://github.com/Ghazi-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/ghazali.png" alt="Ghazali" className="avatar" />
              </a>
            </div>

            <div>
              <p className="p">Roxane</p>

              <a
                href="https://github.com/RoxaneDrelon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/roxane.png" alt="Roxane" className="avatar" />
              </a>

              
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
            <ul className="OtherProject">
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
              <a
                href="https://github.com/snefrou2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/sophie.png" alt="Sophie" className="avatar" />
              </a>
            </div>

            <div>
              <p className="p">Valentin</p>
              <a
                href="https://github.com/ValentinV3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/valentin.png"
                  alt="Valentin"
                  className="avatar"
                />
              </a>
            </div>

            <div>
              <p className="p">Benjamin</p>
              <a
                href="https://github.com/narudb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/benjamin.png"
                  alt="Benjamin"
                  className="avatar"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
