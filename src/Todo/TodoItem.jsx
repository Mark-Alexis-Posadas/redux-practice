export default function TodoItem({ todo, idx, handleDelete }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => handleDelete(idx)}>Delete</button>
    </li>
  );
}
