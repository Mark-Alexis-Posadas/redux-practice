import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";
import { deleteTodo } from "./todoSlice";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo({ text: inputValue, completed: false }));
      setInputValue(""); // Clear input after adding todo
    }
  };
  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, idx) => (
          <TodoItem
            key={idx}
            todo={todo}
            idx={idx}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
