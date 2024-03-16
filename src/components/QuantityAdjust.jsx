import React, { useState } from "react";
import "./QuantityAdjuster.css";

function QuantityAdjuster({ initialQuantity = 1 }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease quantity, ensuring it never goes below 1
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <div className="QA">
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
}

export default QuantityAdjuster;
