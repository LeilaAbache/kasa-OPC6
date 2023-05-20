import React from "react";
import { useRef } from "react";
import { useState } from "react";
import chevron from "../assets/chevron.png";

// Reçoit en paramètre les props de son parent (FicheLogement.js ou About.js)
const Collapse = (props) => {
  /* Création d'une variable "open" initialisée à false (fermée) */
  const [open, setOPen] = useState(false);
  /* Création d'une fonction toggle() qui inverse la valeur de "open" */
  const toggle = () => {
    setOPen(!open);
  };
  /* Hook useRef pour obtenir une référence du contenu de la section (props.children) stockée dans contentRef */
  const contentRef = useRef();

  return (
    <div>
      <button
        className={`collapse-button ${open ? "open" : ""}`}
        // Au clic, appel de la fonction toggle
        onClick={toggle}
      >
        {props.label}
        <img
          className="collapse-icon"
          src={chevron}
          alt="chevron déroulant"
          // Le chevron change d'orientation en open
          style={{ transform: open ? "rotate(-180deg)" : "" }}
        />
      </button>
      <div
        ref={contentRef}
        // Le contenu est affiché en CSS ou non en fonction de l'état open
        className={`collapse-content ${open ? "open" : ""}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
