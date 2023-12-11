const SearchBar = () => {
  return (
    <>
      <form>
        <label htmlFor="search-bar">
          <input
            type="text"
            id="search-bar"
            placeholder="Search for articles/topic"
          ></input>
        </label>
        <button className="submit-search">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
