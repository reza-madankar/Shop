import { useState } from "react";


function App() {
  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  return (
    <div className="App">
      <h2>KindaCode.com</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type={isShown ? "text" : "password"}
          placeholder="Password"
          className="input"
        />

        <div className="checkbox-container">
          <label htmlFor="checkbox">Show password?</label>
          <input
            id="checkbox"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
        </div>
        <button
          className="button"
          onClick={() => {
            /* Do something here */
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default App;