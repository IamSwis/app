import React, { useContext, useState } from "react";
import DataContext from "../context/dataContext"; // Adjust the import path as needed
import QuantityAdjuster from "./QuantityAdjust";
import constants from "../common/config";
import "./Product.css";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(DataContext); // Use useContext to access DataContext

  function add() {
    // Prepare the product object to add to the cart
    const productToAdd = {
      ...props.info,
      quantity: quantity,
    };
    addProductToCart(productToAdd); // Add the product to the cart
    console.log("Adding product:", props.info.title, "Quantity:", quantity);
  }

  function quantityChanged(qty) {
    console.log("Updated your quantity to:", qty);
    setQuantity(qty);
  }

  // Calculate total price based on the quantity
  function getTotal() {
    let total = props.info.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img
        src={constants.IMAGE_PATH + props.info.image}
        alt={props.info.title}
      />
      <h6>{props.info.title}</h6>
      <label className="price">Price: ${props.info.price.toFixed(2)}</label>
      <label className="total">Total: ${getTotal()}</label>

      <QuantityAdjuster initialQuantity={1} onChange={quantityChanged} />
      <button onClick={add} className="btn btn-lg btn-dark btn-success">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
