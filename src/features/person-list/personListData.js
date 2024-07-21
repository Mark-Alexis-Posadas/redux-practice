import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personListData: [
    {
      name: "John Smith",
      age: 35,
      gender: "Male",
      occupation: "Software Engineer",
      city: "New York",
      country: "USA",
    },
    {
      name: "Emily Johnson",
      age: 28,
      gender: "Female",
      occupation: "Marketing Manager",
      city: "Los Angeles",
      country: "USA",
    },
    {
      name: "Michael Brown",
      age: 42,
      gender: "Male",
      occupation: "Doctor",
      city: "London",
      country: "UK",
    },
    {
      name: "Sophia Lee",
      age: 31,
      gender: "Female",
      occupation: "Teacher",
      city: "Sydney",
      country: "Australia",
    },
    {
      name: "Daniel Martinez",
      age: 45,
      gender: "Male",
      occupation: "Architect",
      city: "Barcelona",
      country: "Spain",
    },
    {
      name: "Sarah Clark",
      age: 29,
      gender: "Female",
      occupation: "Graphic Designer",
      city: "Toronto",
      country: "Canada",
    },
    {
      name: "James Wilson",
      age: 38,
      gender: "Male",
      occupation: "Financial Analyst",
      city: "Chicago",
      country: "USA",
    },
    {
      name: "Mia Nguyen",
      age: 26,
      gender: "Female",
      occupation: "Software Developer",
      city: "Hanoi",
      country: "Vietnam",
    },
    {
      name: "Alexander Petrov",
      age: 33,
      gender: "Male",
      occupation: "Engineer",
      city: "Moscow",
      country: "Russia",
    },
    {
      name: "Olivia Taylor",
      age: 30,
      gender: "Female",
      occupation: "Journalist",
      city: "Berlin",
      country: "Germany",
    },
  ],
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
