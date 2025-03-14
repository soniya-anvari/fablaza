import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../features/ProductsSlice";
import cartReducer from "../features/cartSlice.jsx";
const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cartIsOpen: cartReducer,
  },
});
export default store;
