import React from "react";

const Search = ({ handleChange, placeholder }) => {
  return (
    <input
      className="searchui"
      type="Search"
      value={placeholder}
      placeholder="Search"
      onChange={handleChange}
    />
  );
};

export default Search;
