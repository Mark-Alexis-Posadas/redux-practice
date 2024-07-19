import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isModalShow: false,
  editIndex: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    editTodo: (state, action) => {
      state.editIndex = action.payload.index;
    },

    submitEditTodo: (state, action) => {
      const { index, newText } = action.payload;
      state.todos[index] = newText;
      state.editIndex = null;
      state.isModalShow = false;
      // const { index, newText } = action.payload;
      // if (index >= 0 && index < state.todos.length) {
      //   state.todos[index] = newText;
      //   state.editIndex = null;
      //   state.isModalShow = false;
      // } else {
      //   console.error(`Invalid todo index: ${index}`);
      // }
      // state.isModalShow = false;
    },

    toggleModalEdit: (state) => {
      state.isModalShow = true;
    },

    deleteTodo: (state, action) => {
      const index = action.payload;
      state.todos = state.todos.filter((_, idx) => idx !== index);
    },
  },
});

export const {
  addTodo,
  editTodo,
  deleteTodo,
  toggleModalEdit,
  submitEditTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
