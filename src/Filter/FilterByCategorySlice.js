import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
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
  ],
  selectedCategories: [],
};

const filterCategorySlice = createSlice({
  name: "filterByCategory",
  initialState,
  reducers: {
    toggleCategory(state, action) {
      state.selectedCategories = action.payload;
    },
  },
});

export const selectFilteredProducts = (state) => {
  const { products, selectedCategories } = state.filterByCategory; // Adjusted this line
  return selectedCategories.length > 0
    ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : products;
};

export const { toggleCategory } = filterCategorySlice.actions;

export default filterCategorySlice.reducer;
