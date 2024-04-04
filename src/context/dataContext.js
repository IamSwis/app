import { createContext } from "react";

/**
 *  Context is an interface that can be used
 */

const DataContext = createContext({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default DataContext;
