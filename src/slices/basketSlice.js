// REDUX => create global states that can be access by any component without props drilling
// because it has lots of boylerplate, it is only used in large projects

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // ACTION => it is a action to be imterpreted by the reducer, a function
    // that returns an object and it doesnt execute itself
    // actions will not execute till it is dispatched by redux
    // once dispatched it will be interpreted by the reducer and store will be update acordinly
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((basketItem) => basketItem.id === action.payload.id)

      const newBasket = [...state.items];

      if(index >= 0) {
        newBasket.splice(index, 1)
      }

      state.items= newBasket
    },

  },
});

// export actions to be use
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
