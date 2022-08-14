import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Menu() {
  return (
    <div id="menu">
      <div className="logo">
        <h1>Flone.</h1>
      </div>
      <div className="menus">
        <NavDropdown title="Home">
          <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Shop">
          <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <a href="#" className="navItem">
          Collection
        </a>
        <NavDropdown title="Pages">
          <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Blog">
          <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <a href="#" className="navItem">
          About
        </a>
        <a href="#" className="navItem">
          Contact
        </a>
      </div>
      <div className="assistant">
            <span className="fa fa-search"></span>
            <span className="fa fa-user-o"></span>
            <span className="fa fa-heart"></span>
            <span className="fa fa-shopping-basket"></span>
      </div>
    </div>
  );
}

export default Menu;
