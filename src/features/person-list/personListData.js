import { createSlice } from "@reduxjs/toolkit";
import { personListData } from "../../components/PersonList/data";

const initialState = {
  personListData: personListData,
};
export const personListSlice = createSlice({
  initialState,
  name: "personList",
  isModalOpen: false,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },

    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = personListSlice.actions;
export default personListSlice.reducer;
