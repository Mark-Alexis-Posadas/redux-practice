import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  role: "",
  phoneNumber: "",
  address: "",
  isToggleModal: false,
  isEditing: false,
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

    add: (state) => {
      state.isEditing = false;
    },

    edit: (state) => {
      state.isEditing = true;
      console.log(state.isEditing);
    },

    handleSubmitUser: (state, action) => {
      state.submittedUser.push(action.payload);
    },
  },
});

export const {
  handleChange,
  handleSubmitUser,
  openModal,
  closeModal,
  add,
  edit,
} = userManagementSlice.actions;

export default userManagementSlice.reducer;
