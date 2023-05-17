import React, { useState } from "react";

const Slideshow = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = pictures.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }
  return (
    <section className="carousel-container">
      {pictures.map((imageSlide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide active" : "slide"}
            key={index}
          >
            {" "}
            {index === currentSlide && (
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
          <img src="./icone-slide-d.png" alt="flèche suivant" />
        </div>
        <div className="left-arrow" onClick={prevSlide}>
          <img src="./icone-slide-g.png" alt="flèche précédent" />
        </div>
      </div>
      <div className="counter">{`${currentSlide + 1} / ${totalSlides}`}</div>
    </section>
  );
};

export default Slideshow;
