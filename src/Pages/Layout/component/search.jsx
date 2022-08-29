const SearchBox = (props) => {
  return (
    <>
      <div
        onClick={() => props.setSearchVisible(false)}
        className="overlay"
      ></div>
      
      <div className="searchBox">
        <input type="text" placeholder="Search"></input>
        <button type="submit">Submit</button>
    
      </div>
      
    </>
  );
};

export default SearchBox;
