import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Erreur404 from "../pages/Erreur404";
import FicheLogement from "../pages/FicheLogement";
import Home from "../pages/Home";
import "../styles/About.css";
import "../styles/App.css";
import "../styles/Banner.css";
import "../styles/Card.css";
import "../styles/CardsLogements.css";
import "../styles/Collapse.css";
import "../styles/Erreur404.css";
import "../styles/FicheLogement.css";
import "../styles/Footer.css";
import "../styles/Home.css";
import "../styles/Logo.css";
import "../styles/Slideshow.css";
import ScrollToTop from "../components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fichelogement" element={<FicheLogement />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
