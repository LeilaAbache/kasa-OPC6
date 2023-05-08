import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Banner.css";
import Logo from "./Logo";

const Banner = () => {
  return (
    <div className="banner">
      <Logo />
      <div className="navigation">
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
