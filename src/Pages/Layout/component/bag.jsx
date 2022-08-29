import ReactDOM from "react-dom";
import girl2 from "../../../Content/image/girl2.png";
import girl3 from "../../../Content/image/girl3.png";
const BagBox = (props) => {
  return (
    <>
      <div onClick={() => props.setbagVisible(false)} className="overlay"></div>
      <div className="bagBox">
        <img src={girl2}></img>
        <span class="fa fa-times"></span>
        <div className="productPriceLine1">T- Shart & Jeans </div>
        <div className="productfee1">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Qty: 02<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          $260.00
        </div>
        <div className="borderline"></div>
        <img src={girl3}></img>
        <span class="fa fa-times"></span>
        <div className="productPriceLine2">T- Shart & Jeans</div>
        <div className="productfee2">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Qty: 02<br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          $260.00
        </div>
        <div className="borderline"></div>
        <h1>Shipping:</h1>
        <h1>Total:</h1>
        <button className="sellButton">View Card</button>
        <br></br>
        <br></br>
        <br></br>
        <button className="sellButton"> Check Out</button>
      </div>
    </>
  );
};

export default BagBox;
