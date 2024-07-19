import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  submitEditTodo,
  toggleModalEdit,
} from "../features/todo/todoSlice";

import TodoItem from "./TodoItem";
import TodoModal from "./TodoModal";

export default function Todo() {
  const [todoText, setTodoText] = useState("");
  const [modalTextInput, setModalTextInput] = useState("");
  const dispatch = useDispatch();

  //initial state
  const todos = useSelector((state) => state.todos.todos);
  const editModal = useSelector((state) => state.todos.isModalShow);
  const editIndex = useSelector((state) => state.todos.editIndex);

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText.trim()));
      setTodoText("");
      return;
    }

    alert("please input todo");
  };

  const handleEditTodo = (index, text) => {
    dispatch(toggleModalEdit());
    dispatch(editTodo({ index }));
    setModalTextInput(text);
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleSubmit = () => {
    dispatch(
      submitEditTodo({
        index: editIndex,
        newText: modalTextInput,
      })
    );
    setModalTextInput("");
  };

  return (
    <div className="w-[700px] p-10 bg-gray-50]">
      <h1 className="font-bold text-xl mb-10">Todo list app reducer</h1>
      <div className="flex items-center gap-3">
        <input
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
          type="text"
          placeholder="add todo"
          className="bg-slate-50 p-2 border border-slate-50 flex-1"
        />
        <button
          className="text-white rounded p-2 bg-orange-300 hover:bg-orange-400"
          onClick={handleAddTodo}
        >
          add todo
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            index={index}
            key={index}
            todo={todo}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>

      {editModal && (
        <TodoModal
          modalTextInput={modalTextInput}
          setModalTextInput={setModalTextInput}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
