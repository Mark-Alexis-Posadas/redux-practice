import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartCount from "./cartCountSlice.js";
import todo from "../src/Todo/todoSlice.js";

import filterByCategoryReducer from "./Filter/FilterByCategorySlice.js"; // Adjusted import

const store = configureStore({
  reducer: {
    cartCount: cartCount,
    todo: todo,
    filterByCategory: filterByCategoryReducer, // Adjusted the reducer name
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
