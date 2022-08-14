import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../Content/Style/custom.scss";

function Header() {
  return (
    <div className="header" id="header">
      <Navbar bg="white" expand="lg">
        <Container className="justify-content-md-center">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Features"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="AdminPanel"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="User Profile"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="WebSite"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Technologies"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>

        <span>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <div className="icon">
            <i class="fa fa-search"></i>
            <i class="fa fa-heart-o"></i>
            <i class="fa fa-sticky-note-o"></i>
          </div>
        </span>
      </Navbar>
    </div>
  );
}

export default Header;
