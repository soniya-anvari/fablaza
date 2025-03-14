import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cartIsOpent",
  initialState,
  reducers: {
    SET_IS_OPEN(state, action) {
      state.isOpen = action.payload;
    },
  },
});
export default cartSlice.reducer;
export const { SET_IS_OPEN } = cartSlice.actions;
