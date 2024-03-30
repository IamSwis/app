import { useState } from "react";
import "./QuantityAdjuster.css";

//State variables
function QuantityAdjuster({ initialQuantity = 1 }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    console.log("+ clicked");
  };

  // Function to decrease quantity, ensuring it never goes below 1
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
    console.log("+ clicked");
  };

  return (
    <div className="quantity-adjust">
      <button disabled={quantity == 1} onClick={decreaseQuantity}></button>
      <button
        className="btn btn-lg btn-dark -outline-success"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="btn btn-lg btn-dark -outline-success"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
}

export default QuantityAdjuster;
