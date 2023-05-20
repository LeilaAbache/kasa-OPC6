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
  /* Création d'une variable data pour stocker les données du fetch */
  const [data, setData] = useState([]);
  /* Création d'une variable loading initialisée à true pour afficher une page blanche de chargement en cours */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* Création d'une variable isMounted pour vérifier que composant est bien monté avant de charger les données */
    let isMounted = true;
    /* Récupération (GET) et stockage des données de logements.json */
    fetch("logements.json")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          /* Si le composant est bien monté, affichage des données récupérées et disparition de la page blanche de "chargement en cours" */
          setData(data);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Recherche de l'id dans l'URL & stockage dans la variable idLogement
  const [searchParams] = useSearchParams();
  const [idLogement] = useState(searchParams.get("_id"));
  // Comparaison entre l'id de l'URL (idLogement) et les id stockés dans la variable "data"
  // Récupération de l'id correspondant et stockage dans la variable "dataLogement"
  const dataLogement = data.find((logement) => logement.id === idLogement);

  // La condition est demandée après la récupération de l'id pour eviter d'afficher la page 404 avant récupération
  if (loading) {
    return <div>Chargement en cours...</div>;
  }
  // Si aucun id correspondant aux id de dataLogement, redirection vers erreur404
  if (!dataLogement) {
    return <Erreur404 />;
  }

  // Tableau des étoiles
  const tableauStars = [1, 2, 3, 4, 5];

  return (
    <div>
      <main className="main">
        <Banner />
        <article className="page-logement">
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
          <section className="fiche-logement-container">
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
                  /* Parcourt le tableau des stars avec la méthode .map */
                  <img
                    key={index}
                    src={
                      /* Comparaison avec la note attribuée dans rating, et attribution du nombre d'étoiles en fonction du nombre dans rating */
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
          </section>
          <section className="collapse-fiche-container">
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
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default FicheLogement;
