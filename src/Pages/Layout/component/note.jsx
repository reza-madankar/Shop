const NoteBox = (props) => {
    return (
        <>
        <div
        onClick={() => props.setnoteVisible(false)}
        className="overlay"
      ></div>
        <div className="noteBox">
  <h1>Login</h1>
  <h1>Register</h1>
  <h1>Whishlist</h1>
  <h1>My Account</h1>

        </div>
        </>
    )
  };
  
  export default NoteBox;