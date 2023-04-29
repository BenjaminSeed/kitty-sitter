import { useParams } from "react-router-dom";
import sitterData from "../data/Data.json";
import SearchBar from "./SearchBar";
import "../styles/SearchResults.css";

const SearchResults = () => {
  const { name } = useParams();
  const sitter = sitterData.find((sitter) => sitter.name === name);
  console.log(sitter);

  if (!sitter) {
    return <div>No sitter found </div>;
  }

  return (
    <div className="search-results">
      <h1 className="result-header">Cat Sitters profile page</h1>
      <SearchBar placeHolder="search for all cat sitters" data={sitterData} />
      <div className="result-card">
        <div className="result-name">{sitter.name}</div>
        <div className="result-location">{sitter.location}</div>
        <div className="result-price">{sitter.price}</div>
        <div className="result-availability">{sitter.availability}</div>
        <div className="result-rating">{sitter.rating}</div>
      </div>
    </div>
  );
};

export default SearchResults;
