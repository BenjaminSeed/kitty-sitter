import React from "react";
import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
import sitterData from "../data/Data.json";

const HomePage = () => {
  return (
    <div>
      <SearchBar
        placeHolder="search sitter price, location, availability..."
        data={sitterData}
      />
      <Carousel />
    </div>
  );
};

export default HomePage;
