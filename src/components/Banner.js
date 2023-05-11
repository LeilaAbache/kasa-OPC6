import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Banner = () => {
  const location = useLocation();

  return (
    <div className="banner">
      <Logo />
      <div>
        <ul className="navigation">
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
