import React, { useState } from "react";
import chevrondroit from "../assets/icone-slide-d.png";
import chevrongauche from "../assets/icone-slide-g.png";

const Slideshow = ({ pictures }) => {
  const [actuelSlide, setActuelSlide] = useState(0);
  const totalSlides = pictures.length;

  const nextSlide = () => {
    setActuelSlide(actuelSlide === totalSlides - 1 ? 0 : actuelSlide + 1);
  };

  const prevSlide = () => {
    setActuelSlide(actuelSlide === 0 ? totalSlides - 1 : actuelSlide - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }
  return (
    <section className="carousel-container">
      {pictures.map((imageSlide, index) => {
        return (
          <div
            className={index === actuelSlide ? "slide active" : "slide"}
            key={index}
          >
            {" "}
            {index === actuelSlide && (
              <img
                src={imageSlide}
                alt="détail logement"
                className="image-slide"
              />
            )}
          </div>
        );
      })}
      <div className="chevrons-slide">
        <div className="right-arrow" onClick={nextSlide}>
          <img src={chevrondroit} alt="flèche suivant" />
        </div>
        <div className="left-arrow" onClick={prevSlide}>
          <img src={chevrongauche} alt="flèche précédent" />
        </div>
      </div>
      <div className="counter">{`${actuelSlide + 1} / ${totalSlides}`}</div>
    </section>
  );
};

export default Slideshow;
