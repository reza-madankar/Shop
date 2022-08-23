
const NoteBox = ({ children }) => {
    return (
        <>
                <div  onClick={() => setnoteVisible(!noteVisible)} className="overlay">

        <div className="noteBox">
  <h1>Login</h1>
  <h1>Register</h1>
  <h1>Whishlist</h1>
  <h1>My Account</h1>
        </div>
        </div>
        </>
    )
  };
  
  export default NoteBox;