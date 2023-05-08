import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Banner from "../components/Banner";
import axios from "axios";
import Card from "../components/Card";
import Erreur404 from "./Erreur404";
import Collapse from "../components/Collapse";

const FicheLogement = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("logements.json").then((res) => setData(res.data));
  }, []);

  const [searchParams] = useSearchParams();
  const [idLogement] = useState(searchParams.get("_id"));

  // cherche l'id dans le fichier logements.json
  const dataLogement = data.find((logement) => logement.id === idLogement);

  // si l'URL à été modifié manuellement, redirection vers la page d'erreur
  if (!dataLogement) return <Erreur404 />;

  // Tableau des étoiles
  const tableauStars = [1, 2, 3, 4, 5];

  return (
    <div>
      <Banner />
      <div>
        <div>
          <h1>{dataLogement.title}</h1>
          <p>{dataLogement.location}</p>
          <ul>
            {dataLogement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>{dataLogement.host.name}</p>
          <img src={dataLogement.host.picture} alt={dataLogement.host.name} />
        </div>
        <div>
          {tableauStars
            .map((star) => {
              if (star <= dataLogement.rating) {
                return "★";
              } else {
                return "☆";
              }
            })
            .join("")}
        </div>
        <div>
          <Collapse label="Description">
            <p>{dataLogement.description}</p>
          </Collapse>
          <Collapse label="Equipements">
            <ul>
              {dataLogement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FicheLogement;
