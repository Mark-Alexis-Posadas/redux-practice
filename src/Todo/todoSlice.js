import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isModalShow: false,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((_, idx) => idx !== action.payload);
    },

    toggleModal: (state) => {
      state.isModalShow = !state.isModalShow;
    },
  },
});

export const { addTodo, deleteTodo, toggleModal } = todoSlice.actions;

export default todoSlice.reducer;
