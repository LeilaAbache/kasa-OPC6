import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Banner from "../components/Banner";
import axios from "axios";
import Card from "../components/Card";
import Erreur404 from "./Erreur404";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";

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

  {
    dataLogement.pictures.length > 1 ? (
      <Slideshow pictures={dataLogement.pictures} />
    ) : (
      <img src={dataLogement.pictures[0]} alt={dataLogement.title} />
    );
  }

  // Tableau des étoiles
  const tableauStars = [1, 2, 3, 4, 5];

  return (
    <div>
      <Banner />
      <div>
        {dataLogement.pictures.length > 1 ? (
          <Slideshow pictures={dataLogement.pictures} />
        ) : (
          <img
            src={dataLogement.pictures[0]}
            alt={dataLogement.title}
            className="image-solo"
          />
        )}
        <br />
        <div className="infos-logement-container">
          <div className="title-location">
            <h1>{dataLogement.title}</h1>
            <p>{dataLogement.location}</p>
          </div>
          <div className="host-picture">
            <p>{dataLogement.host.name}</p>
            <img
              src={dataLogement.host.picture}
              alt={dataLogement.host.name}
              className="photo-host"
            />
          </div>
        </div>
        <div className="infos-tag-star">
          <div>
            <ul className="tags">
              {dataLogement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="stars">
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
        </div>
        <div className="collapse-fiche">
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
      <Footer />
    </div>
  );
};

export default FicheLogement;
