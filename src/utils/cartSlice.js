import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    //items: ["Bananas", "Apples"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

/*cartSlice returns an object {
    actions: {
        addItem, removeItem, clearCart                                                          
    },
    reducer: {}
}*/

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
