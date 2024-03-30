import "./Product.css";
import QuantityAdjuster from "./QuantityAdjust";
import constants from "../common/config";

function Product(props) {
  function add() {
    console.log("adding Product");
  }

  return (
    <div className="product">
      <img
        src={constants.IMAGE_PATH + props.info.image}
        alt="main product"
      ></img>
      <h6>{props.info.title}</h6>
      <label className="price">${props.info.price}</label>

      <QuantityAdjuster></QuantityAdjuster>
      <button onClick={add} className="btn btn-lg btn-dark btn-success">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
