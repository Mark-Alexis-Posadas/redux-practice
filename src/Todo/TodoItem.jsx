import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";
export default function TodoItem({ todo, idx }) {
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };
  return (
    <li>
      {todo.text}
      <button onClick={() => handleDelete(idx)}>Delete</button>
    </li>
  );
}
