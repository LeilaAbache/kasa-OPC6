import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/">
        <img
          src="./LOGO-Blanc.png"
          alt="Logo Kasa"
          className="logo-footer"
        ></img>
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
