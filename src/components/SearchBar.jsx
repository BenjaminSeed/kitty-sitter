import React, { useState } from "react";
import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeHolder, data }) => {
  useState();
  return (
    <div className="searchBar">
      <div className="searchInput">
        <input type="text" placeholder={placeHolder} />
        <div className="searchIcon">
          <FaSearch />{" "}
        </div>
      </div>
      <div className="results"></div>
    </div>
  );
};

export default SearchBar;
