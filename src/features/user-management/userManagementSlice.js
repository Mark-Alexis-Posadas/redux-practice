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
  isConfirmation: { index: null, show: false },
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

    openConfirmation: (state) => {
      state.isConfirmation.show = true;
    },

    openModal: (state) => {
      state.isToggleModal = true;
    },
    closeModal: (state) => {
      state.isToggleModal = false;
      state.editIndex = null;
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
      const idx = action.payload;
      state.isConfirmation.show = true;
      state.isConfirmation.index = idx;
    },

    handleDeleteYes: (state) => {
      if (state.isConfirmation.index !== null && state.isConfirmation.show) {
        state.submittedUser = state.submittedUser.filter(
          (_, idx) => idx !== state.isConfirmation.index
        );
      }

      state.isConfirmation.show = false;
      state.isConfirmation.index = null;
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
  handleDeleteYes,
  openModal,
  closeModal,
  add,
  toggleEdit,
  toggleDelete,
} = userManagementSlice.actions;

export default userManagementSlice.reducer;
