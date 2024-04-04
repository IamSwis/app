import { useState } from "react";
import "./QuantityAdjuster.css";

function QuantityAdjuster() {
  const [quantity, setQuantity] = useState(1);

  // Function to increase quantity
  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  // Function to decrease quantity, ensuring it never goes below 1
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="quantity-adjust">
      {/* Adjusted the button to include a '-' symbol for clarity */}
      <button
        className="btn btn-lg btn-outline-success"
        onClick={decreaseQuantity}
        disabled={quantity === 1} // Use strict equality for consistency
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="btn btn-lg btn-outline-success"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
}

export default QuantityAdjuster;
