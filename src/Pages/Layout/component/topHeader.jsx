import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "../../../Content/Style/header.scss";

const TopHeader = () => {
  return (
    <div id="topHeader">
      <div className="drpMenu">
        <NavDropdown className="navItem" title="English">
          <NavDropdown.Item href="#action/3.1">Arabic</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Bangla</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Spanish</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown className="navItem" title="USD">
          <NavDropdown.Item href="#action/3.1">Taka (BDT)</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Riyal (SAR)</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Rupee (INR)</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">Dirham (AED)</NavDropdown.Item>
        </NavDropdown>

        <a href="#" className="navItem">
          Call Us 3965410
        </a>
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
