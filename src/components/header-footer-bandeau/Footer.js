import React from "react";
import "./Footer.css";
import teamvalor from "./teamvalor.png";
/*import "./images/teamvalor.png";*/

function Footer() {
  return (
    <div className="footer">
      <a href="">
        <img src={teamvalor} alt="logo valor" className="valor" />
      </a>
    </div>
  );
}

export default Footer;
