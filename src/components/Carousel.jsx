import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { sitters } from "./Data";
import "../styles/Carousel.css";

const Carousel = () => {
  const [people, setPeople] = useState(sitters);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  const nextSLide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, sitterName, review, icon } = person;
        return (
          <article
            className="slider"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={sitterName} className="person-img" />
            <h5 className="name">{sitterName}</h5>
            <p className="text">"{review}"</p>
            <p className="icon">{icon}</p>
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSLide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
