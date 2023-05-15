import React from "react";
import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-container">
      <NavLink to="/">
        <img src={logo} alt="kasa" className="logo"></img>
      </NavLink>
    </div>
  );
};

export default Logo;
