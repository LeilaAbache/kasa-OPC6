import React from "react";
import { NavLink } from "react-router-dom";

const Card = (logement) => {
  /* Prend le paramètre (logement) (défini dans CardsLogements) pour récupérer la data de chaque logement */
  return (
    <article>
      <NavLink
        to={{
          /* Lien de navigation vers la page FicheLogement */
          pathname: "../fichelogement",
          /* Insertion dans l'url de l'id du logement cliqué */
          search: "?_id=" + logement.card.id,
        }}
      >
        <section className="card">
          <img
            className="card-image"
            src={logement.card.cover}
            alt={logement.card.title}
          />
          <div className="card-name">
            <h2>{logement.card.title}</h2>
          </div>
        </section>
      </NavLink>
    </article>
  );
};

export default Card;
