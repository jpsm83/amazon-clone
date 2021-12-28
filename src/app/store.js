// REDUX => create global states that can be access by any component without props drilling
// because it has lots of boylerplate, it is only used in large projects

import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// STORE => it is a globalize state to be use in the entire app
// create store with configureStore() method from @redux/toolkit
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
