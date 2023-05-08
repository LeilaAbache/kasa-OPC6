import React from "react";
import Banner from "../components/Banner";
import CardsLogements from "../components/CardsLogements";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <h1 className="titre-h1">Chez vous partout et ailleurs</h1>
      <CardsLogements />
    </div>
  );
};

export default Home;
