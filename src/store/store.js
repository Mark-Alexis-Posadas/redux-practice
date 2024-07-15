import { configureStore } from "@reduxjs/toolkit";
import { cartCountSlice } from "../features/counter/counterSlice";
import { todoSlice } from "../features/todo/todoSlice";
import { filterCategorySlice } from "../features/filter/filterSlice";
export const store = configureStore({
  reducer: {
    cartCount: cartCountSlice,
    todo: todoSlice,
    filterByCategory: filterCategorySlice,
  },
});
