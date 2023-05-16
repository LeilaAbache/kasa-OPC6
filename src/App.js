import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Erreur404 from "./pages/Erreur404";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";
import "../src/styles/About.css";
import "../src/styles/App.css";
import "../src/styles/Banner.css";
import "../src/styles/Card.css";
import "../src/styles/CardsLogements.css";
import "../src/styles/Collapse.css";
import "../src/styles/Erreur404.css";
import "../src/styles/FicheLogement.css";
import "../src/styles/Footer.css";
import "../src/styles/Home.css";
import "../src/styles/Logo.css";
import "../src/styles/Slideshow.css";

const App = () => {
  return (
    <BrowserRouter>
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
