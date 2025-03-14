import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { getCount, getTotalCost } from "../helper/helper";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
  count: 0,
  totalCost: 0,
  checkOut: false,
};

const brandsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    ADD_TO_CART(state, action) {
      if (!state.products.find((product) => product.id == action.payload.id)) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        const index_I = state.products.findIndex(
          (product) => product.id == action.payload.id
        );
        state.products[index_I].quantity++;
      }
      state.count = getCount(state.products);
      state.totalCost = getTotalCost(state.products);
      localStorage.setItem("products", JSON.stringify(state.products));
      console.log("add", state.products);
    },
    INCREASE(state, action) {
      const indexI = state.products.findIndex(
        (product) => product.id == action.payload.id
      );
      state.products[indexI].quantity++;
      state.count = getCount(state.products);
      state.totalCost = getTotalCost(state.products);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    DECREASE(state, action) {
      const indexD = state.products.findIndex(
        (product) => product.id == action.payload.id
      );
      state.products[indexD].quantity--;
      state.count = getCount(state.products);
      state.totalCost = getTotalCost(state.products);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    REMOVE_ITEM(state, action) {
      const newProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = newProducts;
      state.count = getCount(state.products);
      state.totalCost = getTotalCost(state.products);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
  CHECK_OUT(state) {
    state.products = [];
    state.count = 0;
    state.totalCost = 0;
    state.checkOut = true;
    localStorage.setItem("products", JSON.stringify(state.products));
  },
});
export default brandsSlice.reducer;
export const { ADD_TO_CART, REMOVE_ITEM, INCREASE, DECREASE, CHECK_OUT } =
  brandsSlice.actions;
