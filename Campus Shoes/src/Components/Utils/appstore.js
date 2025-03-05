import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsslice";
import cartReducer from "./cartslice";
const appstore = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default appstore;
