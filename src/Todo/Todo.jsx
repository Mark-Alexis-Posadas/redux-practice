import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  submitEditTodo,
  toggleModalEdit,
  checkTodoExistence,
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
  const existTodo = useSelector((state) => state.todos.isExist);

  useEffect(() => {
    dispatch(checkTodoExistence(todoText));
  }, [todoText, dispatch]);

  const handleChange = (e) => {
    // const newTodoText = e.target.value;
    setTodoText(e.target.value);
    // dispatch(checkTodoExistence(newTodoText));
  };

  const handleAddTodo = (e) => {
    if (existTodo) {
      // Show an alert or a message indicating that the todo already exists
      alert("Todo already exists");
      return;
    }
    if (todoText.includes(e.target.value)) {
      console.log("test");
    }
    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText.trim()));
      setTodoText("");
      return;
    } else {
      alert("please input todo");
    }
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
      {existTodo && <p className="my-3 text-red-300">Todo already exist</p>}

      <div className="flex items-center gap-3">
        <input
          onChange={handleChange}
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
