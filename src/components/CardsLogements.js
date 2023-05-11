import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";

const CardsLogements = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("logements.json").then((res) => setData(res.data));
  }, []);

  return (
    <div className="card-container">
      {data.map((logement) => (
        <Card key={logement.id} card={logement} />
      ))}
    </div>
  );
};

export default CardsLogements;
