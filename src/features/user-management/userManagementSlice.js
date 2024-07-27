import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  role: "",
  phoneNumber: "",
  address: "",
  isToggleModal: false,
  submittedUser: [],
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

    handleSubmitUser: (state, action) => {
      state.submittedUser.push(action.payload);
    },
  },
});

export const { handleChange, handleSubmitUser, openModal, closeModal } =
  userManagementSlice.actions;

export default userManagementSlice.reducer;
