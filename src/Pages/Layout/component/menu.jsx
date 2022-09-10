import girl1 from "../../../Content/image/girl1.png";
import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import SearchBox from "./search";
import NoteBox from "./note";
import BagBox from "./bag";

function Menu() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [noteVisible, setnoteVisible] = useState(false);
  const [bagVisible, setbagVisible] = useState(false);
  return (
    <div id="menu">
      <div className="logo">
        <h1>Flone.</h1>
      </div>
      <div className="menus">
        <NavDropdown title="Home">
          <div className="rowMenu">
            <div className="colMenu">
              <NavDropdown.Item className="navDropdownhead" href="#action/3.1">
                Demo Group 01
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home 1-Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Home 2-Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 3-Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 4-Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 5-Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 6-Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 7-Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 8-minimal
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 9-Electronic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 10-furniture
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                Home 11-Showcase slider
              </NavDropdown.Item>
            </div>
            <div className="colMenu">
              <NavDropdown.Item className="navDropdownhead" href="#action/3.2">
                Demo Group 02
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                Home 12-Plants
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 13-Cosmetics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 14-Chritmas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 15-Fruits
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 16-Black friday
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 17-Flower
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 18-Book
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 19-Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 20-Electronic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home 21-Furniture
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Home 22-Handmade
              </NavDropdown.Item>
            </div>
            <div className="colMenu">
              <NavDropdown.Item className="navDropdownhead" href="#action/3.4">
                Demo Group 03
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 23-Organic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 24-Pet Food
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 25-Auto parts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 26-Cake shop
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 27-Kids Fashion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 28-Book Shop
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 29-Flowe Shop
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home 30-Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Home 31-Black Friday
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 32-Valentine Day
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Home 34-Medical Equipment
              </NavDropdown.Item>
            </div>
          </div>
        </NavDropdown>
        <NavDropdown title="Shop">
          <div className="rowMenu">
            <div className="colMenu">
              <NavDropdown.Item className="navDropdownhead " href="#action/3.1">
                Shop Layout
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Standard Style
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Grid Filter Style
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Grid 2 Column
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Grid No Sidebar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Grid Full Wide
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Grid Right Sidebar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                List 1 Column Box
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                List 1 Column Full Wide
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                List 2 Column Full Wide
              </NavDropdown.Item>
            </div>
            <div className="colMenu">
              <NavDropdown.Item
                className="navDropdownhead menuTitle"
                href="#action/3.3"
              >
                Product Details
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Tab Style 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tab Style 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tab Style 3
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Sticky Style
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gallery Style
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Slide Style
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Affilate Style
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Fixed Image Style
              </NavDropdown.Item>
            </div>
            <div className="colMenu">
              <img src={girl1}></img>
            </div>
          </div>
        </NavDropdown>

        <a href="#" className="navItem">
          Collection
        </a>
        <NavDropdown title="Pages">
          <div className="rowMenu">
            <div className="colMenu">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cart Page</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Checkout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Whishlist</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Login / Register
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">404 Page</NavDropdown.Item>
            </div>
          </div>
        </NavDropdown>
        <NavDropdown title="Blog">
          <div className="rowMenu">
            <div className="colMenu">
              <NavDropdown.Item href="#action/3.1">
                Blog Standard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog No Sidebar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Blog Right Sidebar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Blog Deatails 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Blog Deatails 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Blog Deatails 3
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Features:</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </div>
          </div>
        </NavDropdown>
        <a href="#" className="navItem">
          About
        </a>
        <a href="#" className="navItem">
          Contact
        </a>
      </div>
      <div className="assistant">
        <span
          className="fa fa-search"
          onClick={() => setSearchVisible(!searchVisible)}
        ></span>

        {searchVisible === true && (
          <SearchBox setSearchVisible={setSearchVisible} />
        )}
        <span
          className="fa fa-user-o"
          onClick={() => setnoteVisible(!noteVisible)}
        ></span>

        {noteVisible === true && <NoteBox setnoteVisible={setnoteVisible} />}
        <span className="fa fa-heart"></span>
        <span
          className="fa fa-shopping-basket"
          onClick={() => setbagVisible(!bagVisible)}
        ></span>
        {bagVisible === true && <BagBox setbagVisible={setbagVisible} />}
      </div>
    </div>
  );
}

export default Menu;
