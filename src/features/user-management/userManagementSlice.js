import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  role: "",
  phoneNumber: "",
  address: "",
  editIndex: null,
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
      state.name = "";
      state.email = "";
      state.role = "";
      state.phoneNumber = "";
      state.address = "";
    },

    toggleEdit: (state, action) => {
      const index = action.payload;
      state.isEditing = true;
      state.editIndex = index;
      const userToEdit = state.submittedUser[index];
      state.name = userToEdit.name;
      state.email = userToEdit.email;
      state.role = userToEdit.role;
      state.phoneNumber = userToEdit.phoneNumber;
      state.address = userToEdit.address;
    },

    toggleDelete: (state, action) => {
      const index = action.payload;

      state.submittedUser = state.submittedUser.filter(
        (_, idx) => idx !== index
      );
    },

    handleSubmitUser: (state, action) => {
      if (state.isEditing) {
        state.submittedUser[state.editIndex] = action.payload;
      } else {
        state.submittedUser.push(action.payload);
      }
      state.isToggleModal = false;
    },
  },
});

export const {
  handleChange,
  handleSubmitUser,
  openModal,
  closeModal,
  add,
  toggleEdit,
  toggleDelete,
} = userManagementSlice.actions;

export default userManagementSlice.reducer;
