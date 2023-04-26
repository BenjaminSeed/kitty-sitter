import React, { useState } from "react";
import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeHolder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <div className="searchBar">
      <div className="searchInput">
        <input type="text" placeholder={placeHolder} />
        <div className="searchIcon">
          <FaSearch />{" "}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="results">
          {data.map((value) => {
            const { name, location, price, availability, rating, id } = value;
            return (
              <div key={id} className="dataItem">
                {name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
