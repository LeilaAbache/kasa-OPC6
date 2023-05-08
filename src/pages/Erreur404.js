import React from "react";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";

const Erreur404 = () => {
  return (
    <div>
      <Banner />
      <div>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  );
};

export default Erreur404;
