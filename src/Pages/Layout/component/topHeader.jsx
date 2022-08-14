import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../Content/Style/header.scss";

const TopHeader = () => {
  return (
    <div className="header" id="topHeader">
      <div className="drpMenu">
        <NavDropdown className="navItem" title="English">
          <NavDropdown.Item href="#action/3.1">eNGLISH:</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown className="navItem" title="USD">
          <NavDropdown.Item href="#action/3.1">eNGLISH:</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown className="navItem" title="Call us 3965410"></NavDropdown>
      </div>
      <div className="description">
        <p>
          Free delivery on order over <span className="price">$200</span>
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
