import girl2 from "../../../Content/image/girl2.png";
import girl3 from "../../../Content/image/girl3.png";
const BagBox = (props) => {
  return (
    <>
      <div onClick={() => props.setbagVisible(false)} className="overlay">
        {" "}
      </div>
      <div className="bagBox">
        <img src={girl2}></img>
        <div className="productPriceLine1">
          T- Shart & Jeans<br></br>
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
        <div className="productPriceLine2">
          {" "}
          T- Shart & Jeans<br></br>
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
        <button>View Card</button>
        <br></br>
        <br></br>
        <br></br>
        <button> Check Out</button>
      </div>
    </>
  );
};

export default BagBox;
