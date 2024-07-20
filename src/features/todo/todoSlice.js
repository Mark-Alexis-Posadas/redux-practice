import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isModalShow: false,
  editIndex: null,
  isExist: false,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      state.isExist = false;
    },

    editTodo: (state, action) => {
      state.editIndex = action.payload.index;
    },

    submitEditTodo: (state, action) => {
      const { index, newText } = action.payload;
      state.todos[index] = newText;
      state.editIndex = null;
      state.isModalShow = false;
    },

    toggleModalEdit: (state) => {
      state.isModalShow = true;
    },

    deleteTodo: (state, action) => {
      const index = action.payload;
      state.todos = state.todos.filter((_, idx) => idx !== index);
    },

    checkTodoExistence: (state, action) => {
      state.isExist = state.todos.includes(action.payload);
    },
  },
});

export const {
  addTodo,
  editTodo,
  deleteTodo,
  toggleModalEdit,
  submitEditTodo,
  checkTodoExistence,
} = todoSlice.actions;

export default todoSlice.reducer;
