import React, { useState } from "react";
import "../styles/Slide.css";

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
                alt="image logement"
                className="image-slide"
              />
            )}
          </div>
        );
      })}
      <div className="right-arrow" onClick={nextSlide}>
        &#10095;
      </div>
      <div className="left-arrow" onClick={prevSlide}>
        &#10094;
      </div>
      <div className="counter">{`${currentSlide + 1} / ${totalSlides}`}</div>
    </section>
  );
};

export default Slideshow;
