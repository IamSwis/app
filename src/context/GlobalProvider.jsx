import { useState } from "react";
import DataContext from "./dataContext";
import { useState } from "react";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);

  function addProductToCart(prod) {
    console.log("Global fn");

    // add product to cart
    var copy = [...cart];
    copy.push(prod);
    setCart(copy);
  }

  function removeProductFromCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalProvider;
