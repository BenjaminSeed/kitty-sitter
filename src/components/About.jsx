import React from "react";
import TeamData from "../data/TeamData.json";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <h1 className="about-header">Meet The team behind kitty sitter</h1>
      <p className="about-info">
        Welcome to kitty sitter! the interwebs no1 place for all your cat sitter
        needs.
      </p>
      <p className="about-info">
        Simply navigate to the homepage and use our intuitive and mind blowing
        search system to locate the ideal cat sitter for your beloved kitty cat!
      </p>
      <br />
      <div className="about-wrapper">
        {TeamData.map((data) => {
          const { name, role, description, id, image } = data;
          return (
            <div key={id}>
              <img className="about-image" src={image} alt={name} />
              <h2 className="about-name">{name}</h2>
              <p className="about-role">{role}</p>
              <p className="about-description">{description}</p>
            </div>
          );
        })}
      </div>
      <p className="about-info">
        Kitty sitter was the brainchild of myself, Benjamin Seed, after a rather
        lengthy discussion about who would look after our house-cat whilst we
        were away.
      </p>
      <br />
      <p className="about-info">
        {" "}
        I decided to work on this project as a way to practice my Javascript and
        React skills whilst also hopefully coming up with a semi-useful
        application.
      </p>
      <br />
      <p className="about-info">
        To begin with all data has been hardcoded as json, and rendered
        dynamically. Eventually i plan on turning the app into a full-on MERN
        stack project!
      </p>
      <br />
      <p className="about-info"> To be continued....</p>
    </>
  );
};

export default About;
