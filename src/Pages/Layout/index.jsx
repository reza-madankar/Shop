const Layout = ({ children }) => {
  return (
    <>
      <div className="Header">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home2</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
        </ul>
      </div>
      <div className="content">{children}</div>
      <div className="Footer">
        <h1>footer</h1>
      </div>
    </>
  );
};

export default Layout;
