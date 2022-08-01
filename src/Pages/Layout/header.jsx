import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Content/Style/custom.scss";
import Button from 'react-bootstrap/Button';

function NavbarDarkExample() {
  return (
  <div >

    <Navbar  bg="white" expand="lg" >
      <Container Class="container text-center">
       <Nav >
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
    </Navbar>
  

      </div>
  );
}

export default NavbarDarkExample;