import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Content/Style/custom.scss";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function NavbarDarkExample() {
  return (
  <div className='header' >
 
 
    <Navbar>
      <Container>
        <Nav>
       
           <NavDropdown 
              id="nav-dropdown-dark-example"
              title="English"
              menuVariant="dark">
  <NavDropdown.Item href="#action/3.1">eNGLISH:</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
           </NavDropdown>
           <p></p> 
           <NavDropdown 
              id="nav-dropdown-dark-example"
              title="USD"
              menuVariant="dark">
  <NavDropdown.Item href="#action/3.1">eNGLISH:</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
  <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
           </NavDropdown>
           <p> </p>
           <NavDropdown 
              id="nav-dropdown-dark-example"
              title="Call us 3965410"
              menuVariant="dark">
                 </NavDropdown>
                 <p1>Free delivery on order over <span> $200</span> </p1>
        </Nav>
      </Container>
    </Navbar>
   <h2></h2>
   
 
   
 

  
    <Navbar  bg="white" expand="lg" >
      <Container className="justify-content-md-center">
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
        
      <span> 
        
<div className='icon'>
<i class="glyphicon glyphicon-cloud">/</i>
<i class="glyphicon glyphicon-remove">/</i>
<i class="glyphicon glyphicon-user">/</i>
<i class="glyphicon glyphicon-envelope">/</i>
<i class="glyphicon glyphicon-thumbs-up">/</i>
    </div></span>
    </Navbar>
  


      </div>
  );
}

export default NavbarDarkExample;