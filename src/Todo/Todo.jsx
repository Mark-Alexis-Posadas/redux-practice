import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleModal,
  toggleModalCancel,
} from "../features/todo/todoSlice";

import TodoItem from "./TodoItem";
import TodoModal from "./TodoModal";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [modalInput, setModalInput] = useState("");

  const dispatch = useDispatch();

  //variables
  const todos = useSelector((state) => state.todo.todos);
  const isModalShow = useSelector((state) => state.todo.isModalShow);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo({ text: inputValue, completed: false }));
      setInputValue("");
      return; //stop execution when true
    }

    alert("please add todo");
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleEdit = (index, newText) => {
    dispatch(toggleModal());
    dispatch(editTodo({ index, newText }));
    setModalInput(newText);
  };

  return (
    <div className="p-10 bg-gray-50 relative">
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="border border-slate-50 rounded p-2 bg-slate-200 flex-1"
          placeholder="add todo"
        />
        <button
          className="text-white bg-blue-600 rounded p-2"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo, idx) => (
          <TodoItem
            key={idx}
            todo={todo}
            idx={idx}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      {isModalShow && (
        <TodoModal modalInput={modalInput} setModalInput={setModalInput} />
      )}
    </div>
  );
}
