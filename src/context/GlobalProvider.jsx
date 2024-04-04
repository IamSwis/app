import React, { useState } from "react";
import DataContext from "./dataContext";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);

  function addProductToCart(newProd) {
    setCart((currentCart) => {
      // Check if the product is already in the cart
      const existingProductIndex = currentCart.findIndex(
        (prod) => prod._id === newProd._id
      );

      if (existingProductIndex >= 0) {
        // Product exists, update its quantity
        const updatedCart = [...currentCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity:
            updatedCart[existingProductIndex].quantity + newProd.quantity,
        };
        return updatedCart;
      } else {
        // Product doesn't exist, add it to the cart
        return [...currentCart, newProd];
      }
    });
  }

  function removeProductFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((prod) => prod._id !== productId)
    );
  }

  return (
    <DataContext.Provider
      value={{ cart, addProductToCart, removeProductFromCart }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;
