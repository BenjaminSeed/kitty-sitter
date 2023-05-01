import { useParams } from "react-router-dom";
import { useState } from "react";
import sitterData from "../data/Data.json";
import SearchBar from "./SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const [viewAllProfiles, setViewAllProfiles] = useState(false);
  const [hideAllProfiles, setHideAllProfiles] = useState(true);
  const { name } = useParams();
  const sitter = sitterData.find((sitter) => sitter.name === name);
  console.log(sitter);

  if (!sitter) {
    return <div>No sitter found </div>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    toast("the button doesn't do anything yet 😔");
  };

  const handleProfileClick = () => {
    setViewAllProfiles(true);
    setHideAllProfiles(false);
  };

  const hideProfileClick = () => {
    setHideAllProfiles(true);
    setViewAllProfiles(false);
  };

  return (
    <div className="search-results">
      <h1 className="result-header">Cat Sitters profile page</h1>
      <div className="result-buttons">
        <button
          className="view-button"
          type="button"
          onClick={handleProfileClick}
        >
          view all
        </button>
        <button
          className="hide-button"
          type="button"
          onClick={hideProfileClick}
        >
          hide all
        </button>
      </div>
      <SearchBar
        placeHolder="search for all cat sitters by location, price or availability"
        data={sitterData}
      />
      {viewAllProfiles && (
        <>
          {sitterData.map((sitter) => (
            <div className="result-card" key={sitter.id}>
              <img
                className="result-image"
                src={sitter.image}
                alt={sitter.name}
              />
              <div className="result-name">{sitter.name}</div>
              <div className="result-location">{sitter.location}</div>
              <div className="result-price">{sitter.price}</div>
              <div className="result-availability">
                Availability: {sitter.availability}
              </div>
              <div className="result-bio">"{sitter.bio}"</div>
              <div className="result-rating">Rating: {sitter.rating}</div>
              <button
                className="result-button"
                type="button"
                onClick={handleClick}
              >
                send message
              </button>
            </div>
          ))}
        </>
      )}
      {!viewAllProfiles && (
        <div className="result-card">
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
      )}
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default SearchResults;
