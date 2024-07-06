import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //  if() {
      state.items.push(action.payload);
      //  }
      // item = [{id: 121, name: "burger"}, {id: 545, name: "pizza"}]
    },
    removeItem: (state, action) => {
      let findIndex = -1;
      for (let count = 0; count < state.items.length; count++) {
        if (state.items[count].card.info.id === action.payload.card.info.id) {
          findIndex = count;
        }
      }
      state.items.splice(findIndex, 1);
      // [2, 3, 4, 5] - delete 3 -> index 3, items.splice(1, 1)
      // item = [{id: 121, name: "burger"}]
    },
    clearCart: (state, action) => {
      state.items.length = 0; // This alone will work
      // state.items = []; // will not work
      // items = []
    },
  },
});

// CartSlice: {
//   reducer: null,
//   action: null
// }

// export default CartSlice;

export default CartSlice.reducer;
export const { addItem, removeItem, clearCart } = CartSlice.actions;
