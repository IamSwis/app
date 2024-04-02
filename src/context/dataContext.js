import { createContext } from "react";

/**
 *  Context isan interface that can be used
 */

const DataContext = createContext({
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export default DataContext;
