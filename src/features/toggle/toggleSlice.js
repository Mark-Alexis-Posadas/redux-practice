import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggle: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setIsToggle: (state) => {
      state.isToggle = !state.isToggle;
    },
  },
});

export const { setIsToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
