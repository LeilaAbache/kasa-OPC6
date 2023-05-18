import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Banner from "../components/Banner";
import Erreur404 from "./Erreur404";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import etoilePleine from "../assets/etoile-pleine.png";
import etoileVide from "../assets/etoile-vide.png";

const FicheLogement = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const [searchParams] = useSearchParams();
  const [idLogement] = useState(searchParams.get("_id"));

  const dataLogement = data.find((logement) => logement.id === idLogement);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (!dataLogement) {
    return <Erreur404 />;
  }

  // Tableau des étoiles
  const tableauStars = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="main">
        <Banner />
        <div className="page-logement">
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
          <div className="fiche-logement-container">
            <div className="infos-logement-container">
              <div className="title-location">
                <h1>{dataLogement.title}</h1>
                <p>{dataLogement.location}</p>
              </div>
              <div>
                <ul className="tags">
                  {dataLogement.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="host-star-container">
              <div className="host-picture">
                <p>{dataLogement.host.name}</p>
                <img
                  src={dataLogement.host.picture}
                  alt={dataLogement.host.name}
                  className="photo-host"
                />
              </div>
              <div className="stars">
                {tableauStars.map((star, index) => (
                  <img
                    key={index}
                    src={
                      star <= dataLogement.rating ? etoilePleine : etoileVide
                    }
                    alt={
                      star <= dataLogement.rating
                        ? "étoile pleine"
                        : "étoile vide"
                    }
                    className={
                      star <= dataLogement.rating
                        ? "etoile-pleine"
                        : "etoile-vide"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="collapse-fiche-container">
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
      <Footer />
    </div>
  );
};

export default FicheLogement;
