import { createSlice } from "@reduxjs/toolkit";

const initialProducts = [
  {
    id: 1,
    productName: "Laptop",
    category: "Electronics",
    stock: 10,
  },
  {
    id: 2,
    productName: "T-shirt",
    category: "Clothing",
    stock: 20,
  },
  {
    id: 3,
    productName: "Banana",
    category: "Food",
    stock: 5,
  },
  {
    id: 4,
    productName: "Watch",
    category: "Accessories",
    stock: 15,
  },
];

const filterByCategorySlice = createSlice({
  name: "filterByCategory",
  initialState: {
    products: initialProducts, // Set initial state with products
    selectedCategories: [], // Initialize selected categories
  },

  reducer: {
    filterdByCategories: (state, action) => {
      const { selectedCategories } = action.payload;
      state.products = initialProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    },
  },
});

export const { filterByCategory } = filterByCategorySlice.actions;

export default filterByCategorySlice.reducer;
