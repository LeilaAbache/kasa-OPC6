import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import imageAbout from "../assets/image-page-about.png";

const About = () => {
  return (
    <div>
      <main className="main">
        <Banner />
        <div className="image-about">
          <img src={imageAbout} alt="montagne" />
        </div>
        <section className="collapse-about-container">
          <Collapse label="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </Collapse>
          <br />
          <Collapse label="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme
            </p>
          </Collapse>
          <br />
          <Collapse label="Service">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </Collapse>
          <br />
          <Collapse label="Sécurité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
