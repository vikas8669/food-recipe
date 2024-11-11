import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import CategorySlice from "./CategorySlice";
import SeachSlice from "./SearchSlice";
export const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SeachSlice,
  },
});
