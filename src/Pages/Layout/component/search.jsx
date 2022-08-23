import { useState } from "react";


const SearchBox = ({ children }) => {
    return (
        
        <>
        <div  onClick={() => setsearchVisible(current => !current)} className="overlay">
        <div className="searchBox">
  
  <input type="text" placeholder="Search"></input>
  <button type="submit">Submit</button>
        </div>
        </div>
        </>
    )
  };
  
  export default SearchBox;