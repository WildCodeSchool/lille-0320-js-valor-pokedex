import React from "react";
import "./Footer.css";
import teamvalor from "./src/img/teamvalor.png";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <a href="">
          <img src={teamvalor} alt="logo valor" className="valor" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
