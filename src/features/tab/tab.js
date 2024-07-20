import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabText: ["Home", "About", "Blog", "Contact"],
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
