import { useContext } from "react";
import DataContext from "../context/dataContext";
import constants from "../common/config";
import "./Cart.css";

function Cart() {
  const { cart } = useContext(DataContext); // Assuming DataContext is structured correctly
  console.log("Current cart:", cart); // This line logs the current state of the cart

  function getNumProducts() {
    return cart.reduce((total, prod) => total + prod.quantity, 0);
  }

  function getTotal() {
    return cart
      .reduce((total, prod) => total + prod.price * prod.quantity, 0)
      .toFixed(2);
  }

  return (
    <div className="cart page">
      <h1>Cart</h1>
      <h6>We have {getNumProducts()} products ready for you!!!</h6>

      <div className="parent">
        {cart.length > 0 ? (
          cart.map((prod) => (
            <div key={prod._id} className="prod-cart">
              <img src={constants.IMAGE_PATH + prod.image} alt={prod.title} />
              <div>
                <h5>{prod.title}</h5>
                <label>{prod.category}</label>
                <label>Price: ${prod.price.toFixed(2)}</label>
                <label>Quantity: {prod.quantity}</label>
                <label>Total: ${(prod.quantity * prod.price).toFixed(2)}</label>
              </div>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div>
        <h3>Total: ${getTotal()}</h3>
      </div>
    </div>
  );
}

export default Cart;
