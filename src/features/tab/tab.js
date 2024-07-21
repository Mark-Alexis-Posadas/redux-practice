import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabText: ["Home", "About", "Blog", "Contact"],
  tabContent: [
    {
      id: 1,
      content: "Home page",
    },
    {
      id: 2,
      content: "About page",
    },
    {
      id: 3,
      content: "Blog page",
    },
    {
      id: 4,
      content: "Contact page",
    },
  ],
  isActive: 0,
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,

  reducers: {
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { setIsActive } = tabSlice.actions;

export default tabSlice.reducer;
