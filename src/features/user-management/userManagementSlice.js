import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  role: "",
  phoneNumber: "",
  address: "",
  isToggleModal: false,
};

export const userManagementSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    openModal: (state) => {
      state.isToggleModal = true;
    },
    closeModal: (state) => {
      state.isToggleModal = false;
    },
  },
});

export const { handleChange, openModal, closeModal } =
  userManagementSlice.actions;

export default userManagementSlice.reducer;
