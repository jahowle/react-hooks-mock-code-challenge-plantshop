import React from "react";

function Search({onHandleSearch}) {

  function handleSearchTerm(e) {
    onHandleSearch(e)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchTerm}
      />
    </div>
  );
}

export default Search;
