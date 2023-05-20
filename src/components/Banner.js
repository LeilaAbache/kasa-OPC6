import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Banner = () => {
  const location = useLocation();

  return (
    <div className="banner">
      <Logo />
      <nav>
        <ul className="navigation">
          <NavLink
            to="/"
            /* Applique la classe nav-active lorsque je suis sur la page accueil */
            className={location.pathname === "/" ? "nav-active" : ""}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={location.pathname === "/about" ? "nav-active" : ""}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Banner;
