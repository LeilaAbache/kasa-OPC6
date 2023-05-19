import React from "react";
import { NavLink } from "react-router-dom";

const Card = (logement) => {
  return (
    <article>
      <NavLink
        to={{
          pathname: "../fichelogement",
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
