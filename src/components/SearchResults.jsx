import { useParams } from "react-router-dom";
import { useState } from "react";
import sitterData from "../data/Data.json";
import SearchBar from "./SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/SearchResults.css";
import ResultCard from "./ResultCard";

const SearchResults = () => {
  const [showAllProfiles, setShowProfiles] = useState(false);
  const [showSingleProfile, setShowSingleProfile] = useState(true);
  const { name } = useParams();
  const sitter = sitterData.find((sitter) => sitter.name === name);
  console.log(sitter);

  if (!sitter) {
    return <div>No sitter found </div>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    toast("functionality coming soon!");
  };

  const handleProfileClick = () => {
    setShowProfiles(true);
    setShowSingleProfile(false);
  };

  const hideProfileClick = () => {
    setShowSingleProfile(true);
    setShowProfiles(false);
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
      {showAllProfiles && (
        <>
          {sitterData.map((sitter) => (
            <ResultCard
              sitter={sitter}
              handleClick={handleClick}
              key={sitter.id}
            />
          ))}
        </>
      )}
      {!showAllProfiles && (
        <ResultCard sitter={sitter} handleClick={handleClick} key={sitter.id} />
      )}
      <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default SearchResults;
