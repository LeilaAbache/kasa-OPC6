import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardsLogements = () => {
  /* création variable pour stocker les données de logements.json */
  const [data, setData] = useState([]);

  /* Le useEffect se joue lorsque le composant est monté */
  useEffect(() => {
    /* Récupération (GET) des données et stockage */
    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    /* Utilisation de la méthode .map pour parcourir les éléments du tableau */
    <div className="card-container">
      {data.map((logement) => (
        /* Chaque logement sera intégré dans une Card */
        <Card key={logement.id} card={logement} />
      ))}
    </div>
  );
};

export default CardsLogements;
