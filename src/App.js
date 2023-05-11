import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Erreur404 from "./pages/Erreur404";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";
import "../src/styles/style.css";

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
