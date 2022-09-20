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
          <div className="footerCloumn1">
            <div className="tittleCloumn1">
              <h3>ABOUT US</h3>
              <a>About us</a>
              <a>Store location</a>
              <a>Contact</a>
              <a>Orders tracking</a>
            </div>
          </div>
          <div className="footerCloumn2">
            <div className="tittleCloumn2">
              <h3>USEFUL LINKS</h3>
              <a>Returns</a>
              <a>Support Policy</a>
              <a>Size guide</a>
              <a>FAQs</a>
            </div>
          </div>
          <div className="footerCloumn3">
            <div className="tittleCloumn3">
              <h3>FOLLOW US</h3>
              <a>Facebook</a>
              <a>Twitter</a>
              <a>Instagram</a>
              <a>Youtube</a>
            </div>
          </div>
          <div className="footerCloumn4">
            <div className="tittleCloumn4">
              <h3>SUBSCRIBE</h3>
              <p>
                Get E-mail updates about our latest shop<br></br> and special
                offers.
              </p>
            </div>
            <input
              className="emailInput"
              placeholder="Enter Your Email Here"
            ></input>
            <div className="subscribe">SUBSCRIBE </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
