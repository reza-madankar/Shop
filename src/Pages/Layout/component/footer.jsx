import React from "react";
import "../../../Content/Style/footerStyle.scss";

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="mainFooter">
          <div className="logo">
            <h1>Flone.</h1>
            <p>
              © 2021 Flone.<br></br>
              All Rights Reserved
            </p>
          </div>
          <div className="footerCloumn">
            <ul className="tittleCloumn">ABOUT US</ul>
            <ul>About us</ul>
            <ul>Store location</ul>
            <ul>Contact</ul>
            <ul>Orders tracking</ul>
          </div>
          <div className="footerCloumn">
            <ul className="tittleCloumn">USEFUL LINKS</ul>
            <ul>Returns</ul>
            <ul>Support Policy</ul>
            <ul>Size guide</ul>
            <ul>FAQs</ul>
          </div>
          <div className="footerCloumn">
            <ul className="tittleCloumn">FOLLOW US</ul>
            <ul>
              <li>Facebook</li>
            <li>Twitter</li>
           <li>Instagram</li>
            <li>Youtube</li>
            </ul>
          </div>
          <div className="footerCloumn">
            <ul className="tittleCloumn">SUBSCRIBE</ul>
            <ul>
              Get E-mail updates about our latest shop<br></br> and special
              offers.
            </ul>
            <input
              className="emailInput"
              placeholder="Enter Your Email Here"
            ></input>
            <ul className="subscribe">SUBSCRIBE </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
