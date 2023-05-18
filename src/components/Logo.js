import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <NavLink to="/">
        <img src={logo} alt="Logo kasa" className="logo"></img>
      </NavLink>
    </div>
  );
};

export default Logo;
