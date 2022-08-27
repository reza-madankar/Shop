
const SearchBox = (props) => {
  
    return (
        
        <>
<div onClick={alert("Hello World!")} className="overlay" ></div>
        <div className="searchBox">
  <input type="text" placeholder="Search"></input>
  <button type="submit">Submit</button>
        </div>
        </>
    )
  };
  
  export default SearchBox;