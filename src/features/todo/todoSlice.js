import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isModalShow: false,
  todoIndex: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    editTodo: (state, action) => {
      const { index, newText } = action.payload;
      state.todos[index].text = newText;
    },

    submitEditTodo: (state, action) => {
      state.todos;
    },

    deleteTodo: (state, action) => {
      const index = action.payload;

      state.todos = state.todos.filter((_, idx) => idx !== index);
    },

    toggleModal: (state) => {
      state.isModalShow = !state.isModalShow;
    },

    toggleModalCancel: (state) => {
      state.isModalShow = false;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleModal, toggleModalCancel } =
  todoSlice.actions;

export default todoSlice.reducer;
