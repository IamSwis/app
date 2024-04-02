import "./Product.css";
import QuantityAdjuster from "./QuantityAdjust";
import constants from "../common/config";
import { useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  function add() {
    console.log("adding Product");
  }

  function quantityChanged(qty) {
    console.log("Updated your quantity");
    setQuantity(qty);
  }

  function getTotal() {
    //ton of logic here

    let total = props.info.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img
        src={constants.IMAGE_PATH + props.info.image}
        alt="main product"
      ></img>
      <h6>{props.info.title}</h6>
      <label className="price">${props.info.price}</label>
      <label className="total">${props.info.price.toFixed(2)}</label>

      <QuantityAdjuster onChange={quantityChanged}></QuantityAdjuster>
      <button onClick={add} className="btn btn-lg btn-dark btn-success">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
