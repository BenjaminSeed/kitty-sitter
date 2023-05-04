import React from "react";

const ResultCard = ({ sitter, handleClick }) => {
  return (
    <div>
      <div className="result-card" key={sitter.id}>
        <img className="result-image" src={sitter.image} alt={sitter.name} />
        <div className="result-name">{sitter.name}</div>
        <div className="result-location">{sitter.location}</div>
        <div className="result-price">{sitter.price}</div>
        <div className="result-availability">
          Availability: {sitter.availability}
        </div>
        <div className="result-bio">"{sitter.bio}"</div>
        <div className="result-rating">Rating: {sitter.rating}</div>
        <button className="result-button" type="button" onClick={handleClick}>
          send message
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
