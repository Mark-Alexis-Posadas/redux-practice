import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { todoSlice } from "../features/todo/todoSlice";
import { filterCategorySlice } from "../features/filter/filterSlice";
import { tabSlice } from "../features/tab/tab";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todoSlice.reducer,
    filterByCategory: filterCategorySlice.reducer,
    tab: tabSlice.reducer,
  },
});
