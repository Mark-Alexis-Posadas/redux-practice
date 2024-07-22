import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { todoSlice } from "../features/todo/todoSlice";
import { filterCategorySlice } from "../features/filter/filterSlice";
import { tabSlice } from "../features/tab/tab";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { countriesApi } from "../features/person-list/personListData";

import {
  countriesApi,
  personListSlice,
} from "../features/person-list/personListData";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todoSlice.reducer,
    filterByCategory: filterCategorySlice.reducer,
    tab: tabSlice.reducer,
    personList: personListSlice.reducer,

    [countriesApi.reducerPath]: countriesApi.reducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(countriesApi.middleware),
  },
});
