import { useState } from "react";
import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeHolder, data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const userSearch = e.target.value;
    const userFilter = data.filter((value) => {
      return (
        value.name.toLowerCase().includes(userSearch.toLowerCase()) ||
        value.location.toLowerCase().includes(userSearch.toLowerCase()) ||
        value.price.toString().includes(userSearch.toString()) ||
        value.availability.toLowerCase().includes(userSearch.toLowerCase()) ||
        value.rating.toString().includes(userSearch.toString())
      );
    });

    if (userSearch === "") {
      return setFilteredData([]);
    } else {
      setFilteredData(userFilter);
    }
  };

  return (
    <div className="searchBar">
      <div className="searchInput">
        <input type="text" placeholder={placeHolder} onChange={handleChange} />
        <div className="searchIcon">
          <FaSearch />{" "}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="results">
          {filteredData.map((value) => {
            const { name, location, price, availability, rating, id } = value;
            return (
              <div key={id} className="dataItem">
                <div className="dataItemName">Sitter Name : {name}</div>
                <div className="dataItemLocation">
                  Sitter Location : {location}
                </div>
                <div className="dataItemPrice">Sitter Price : {price}</div>
                <div className="dataItemAvailability">
                  Sitter Availability : {availability}
                </div>
                <div className="dataItemRating">Sitter Rating : {rating}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
