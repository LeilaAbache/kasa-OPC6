import React from "react";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Erreur404 = () => {
  return (
    <div>
      <div className="main">
        <Banner />
        <div className="msg-erreur">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Erreur404;
