import { useState, useEffect } from "react";
import "./QuantityAdjuster.css";

function QuantityAdjuster({ initialQuantity = 1, onChange }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  // Notify parent component of quantity change
  useEffect(() => {
    onChange(quantity);
  }, [quantity, onChange]);

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease quantity, ensuring it never goes below 1
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <div className="quantity-adjust">
      <button
        className="btn btn-lg btn-dark-outline-success"
        onClick={decreaseQuantity}
        disabled={quantity === 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="btn btn-lg btn-dark-outline-success"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
}

export default QuantityAdjuster;
