import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { todoSlice } from "../features/todo/todoSlice";
import { filterCategorySlice } from "../features/filter/filterSlice";
import { tabSlice } from "../features/tab/tab";
import { userManagementSlice } from "../features/user-management/userManagementSlice";
import { toggleSlice } from "../features/toggle/toggleSlice";
import { fetchPost } from "../features/data-fetching/dataFetchingSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todoSlice.reducer,
    filterByCategory: filterCategorySlice.reducer,
    tab: tabSlice.reducer,
    userManagement: userManagementSlice.reducer,
    toggle: toggleSlice.reducer,
    [fetchPost.reducerPath]: fetchPost.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchPost.middleware),
});
