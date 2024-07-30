import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem("userManagementState");
  return savedData
    ? JSON.parse(savedData)
    : {
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
};
const initialState = loadFromLocalStorage();

export const userManagementSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
      localStorage.setItem("userManagementState", JSON.stringify(state));
    },

    openConfirmation: (state) => {
      state.isConfirmation.show = true;
      localStorage.setItem("userManagementState", JSON.stringify(state));
    },

    openModal: (state) => {
      state.isToggleModal = true;
      localStorage.setItem("userManagementState", JSON.stringify(state));
    },
    closeModal: (state) => {
      state.isToggleModal = false;
      state.editIndex = null;
      localStorage.setItem("userManagementState", JSON.stringify(state));
    },

    add: (state) => {
      state.isEditing = false;
      state.name = "";
      state.email = "";
      state.role = "";
      state.phoneNumber = "";
      state.address = "";
      localStorage.setItem("userManagementState", JSON.stringify(state));
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
      localStorage.setItem("userManagementState", JSON.stringify(state));
    },

    closeConfirmationModal: (state) => {
      state.isConfirmation.show = false;
      localStorage.setItem("userManagementState", JSON.stringify(state));
    },

    toggleDelete: (state, action) => {
      const idx = action.payload;
      state.isConfirmation.show = true;
      state.isConfirmation.index = idx;
      localStorage.setItem("userManagementState", JSON.stringify(state));
      localStorage.setItem("userManagementState", JSON.stringify(state));
    },

    handleDeleteYes: (state) => {
      if (state.isConfirmation.index !== null && state.isConfirmation.show) {
        state.submittedUser = state.submittedUser.filter(
          (_, idx) => idx !== state.isConfirmation.index
        );
      }

      state.isConfirmation.show = false;
      state.isConfirmation.index = null;
      localStorage.setItem("userManagementState", JSON.stringify(state));
    },

    handleSubmitUser: (state, action) => {
      if (state.isEditing) {
        state.submittedUser[state.editIndex] = action.payload;
      } else {
        state.submittedUser.push(action.payload);
      }
      state.isToggleModal = false;
      localStorage.setItem("userManagementState", JSON.stringify(state));
    },
  },
});

export const {
  handleChange,
  handleSubmitUser,
  handleDeleteYes,
  openModal,
  closeModal,
  closeConfirmationModal,
  add,
  toggleEdit,
  toggleDelete,
  setFormErrors,
} = userManagementSlice.actions;

export default userManagementSlice.reducer;
